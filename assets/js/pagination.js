// 通用分页功能
class PaginationManager {
    constructor(images, imagesPerPage = 20) {
        this.images = images;
        this.imagesPerPage = imagesPerPage;
        this.currentPage = 1;
        this.totalPages = Math.ceil(images.length / imagesPerPage);
        this.currentImageIndex = 0;
    }

    initialize() {
        // 直接使用YAML中已排列好的顺序，不进行额外排序
        this.updatePaginationInfo();
        this.generatePageNumbers();
        this.updatePaginationButtons();
        this.loadPage(1);
    }

    loadPage(page) {
        this.currentPage = page;
        const startIndex = (page - 1) * this.imagesPerPage;
        const endIndex = Math.min(startIndex + this.imagesPerPage, this.images.length);
        const pageImages = this.images.slice(startIndex, endIndex);
        
        const masonryGrid = document.getElementById('masonryGrid');
        masonryGrid.innerHTML = '';
        
        pageImages.forEach((image, index) => {
            const item = document.createElement('div');
            item.className = 'masonry-item';
            item.onclick = () => this.openModal(image.path);
            
            const img = document.createElement('img');
            img.src = image.path;
            img.alt = '';
            img.className = 'masonry-image';
            img.loading = 'lazy';
            
            item.appendChild(img);
            masonryGrid.appendChild(item);
        });
        
        this.updatePaginationInfo();
        this.updatePaginationButtons();
        this.updatePageNumbers();
    }

    updatePaginationInfo() {
        const startIndex = (this.currentPage - 1) * this.imagesPerPage + 1;
        const endIndex = Math.min(this.currentPage * this.imagesPerPage, this.images.length);
        const paginationInfo = document.getElementById('paginationInfo');
        paginationInfo.textContent = `Showing ${startIndex}-${endIndex} of ${this.images.length} images`;
    }

    generatePageNumbers() {
        const paginationPages = document.getElementById('paginationPages');
        paginationPages.innerHTML = '';
        
        // 显示页码逻辑：最多显示7个页码
        let startPage = Math.max(1, this.currentPage - 3);
        let endPage = Math.min(this.totalPages, this.currentPage + 3);
        
        // 确保至少显示7个页码（如果总页数足够）
        if (endPage - startPage < 6) {
            if (startPage === 1) {
                endPage = Math.min(this.totalPages, startPage + 6);
            } else {
                startPage = Math.max(1, endPage - 6);
            }
        }
        
        // 添加第一页和省略号
        if (startPage > 1) {
            this.addPageNumber(1);
            if (startPage > 2) {
                this.addEllipsis();
            }
        }
        
        // 添加页码
        for (let i = startPage; i <= endPage; i++) {
            this.addPageNumber(i);
        }
        
        // 添加省略号和最后一页
        if (endPage < this.totalPages) {
            if (endPage < this.totalPages - 1) {
                this.addEllipsis();
            }
            this.addPageNumber(this.totalPages);
        }
    }

    addPageNumber(pageNum) {
        const paginationPages = document.getElementById('paginationPages');
        const pageElement = document.createElement('span');
        pageElement.className = 'page-number';
        pageElement.textContent = pageNum;
        pageElement.onclick = () => this.loadPage(pageNum);
        paginationPages.appendChild(pageElement);
    }

    addEllipsis() {
        const paginationPages = document.getElementById('paginationPages');
        const ellipsis = document.createElement('span');
        ellipsis.className = 'page-number';
        ellipsis.textContent = '...';
        ellipsis.style.cursor = 'default';
        ellipsis.style.pointerEvents = 'none';
        paginationPages.appendChild(ellipsis);
    }

    updatePageNumbers() {
        const pageNumbers = document.querySelectorAll('.page-number');
        pageNumbers.forEach(page => {
            page.classList.remove('active');
            if (parseInt(page.textContent) === this.currentPage) {
                page.classList.add('active');
            }
        });
    }

    updatePaginationButtons() {
        const prevBtn = document.getElementById('prevPage');
        const nextBtn = document.getElementById('nextPage');
        
        prevBtn.disabled = this.currentPage === 1;
        nextBtn.disabled = this.currentPage === this.totalPages;
        
        prevBtn.onclick = () => {
            if (this.currentPage > 1) {
                this.loadPage(this.currentPage - 1);
            }
        };
        
        nextBtn.onclick = () => {
            if (this.currentPage < this.totalPages) {
                this.loadPage(this.currentPage + 1);
            }
        };
    }

    openModal(imagePath) {
        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        const modalDate = document.getElementById('modalDate');
        const modalDescription = document.getElementById('modalDescription');
        
        // Find current image index
        this.currentImageIndex = this.images.findIndex(img => img.path === imagePath);
        if (this.currentImageIndex === -1) this.currentImageIndex = 0;
        
        modalImage.src = imagePath;
        modalTitle.textContent = '';
        modalDate.textContent = '';
        modalDescription.textContent = '';
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        const modal = document.getElementById('imageModal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    nextImage() {
        if (this.images.length === 0) return;
        
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
        this.updateModalImage();
    }

    previousImage() {
        if (this.images.length === 0) return;
        
        this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
        this.updateModalImage();
    }

    updateModalImage() {
        const modalImage = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        const modalDate = document.getElementById('modalDate');
        const modalDescription = document.getElementById('modalDescription');
        
        const currentImage = this.images[this.currentImageIndex];
        modalImage.src = currentImage.path;
        modalTitle.textContent = '';
        modalDate.textContent = '';
        modalDescription.textContent = '';
    }
}

// 全局变量
let paginationManager;

// 初始化分页
function initializePagination(images) {
    paginationManager = new PaginationManager(images);
    paginationManager.initialize();
    
    // 设置全局函数
    window.openModal = (imagePath) => paginationManager.openModal(imagePath);
    window.closeModal = () => paginationManager.closeModal();
    window.nextImage = () => paginationManager.nextImage();
    window.previousImage = () => paginationManager.previousImage();
}
