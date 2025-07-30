---
title:          "Cryo-EM Structure Reconstruction by Gaussian Splatting: Pushing the Resolution to Extrem"
date:           2025-03-19
selected:       true
pub:            "Nature"
pub_pre:        "Submitted to "
pub_post:       ' (Under review)'
pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Preprint</span>'
pub_date:       "2025-03"

abstract: >-
  In the field of structural biology, Cryo-EM based high-resolution 3-D structure reconstruction of complex macromolecules is a vital step. Although multiple attempts have been tried within this framework to consider quality-degrading factors such as imaging noise, non-uniform distribution of particle orientations, and sample heterogeneity in order to achieve high resolution, there is still a substantial gap between the best reconstruction resolution achieved by the existing methods and the hard resolution provided by the imaging device. Here, we introduce CryoGS, a novel 3-D reconstruction method for Cryo-EM structures using Gaussian splatting. Through the integration of 3-D Gaussian representations into neural network learning, CryoGS employs a spatial domain approach to optimize learnable 3-D Gaussians and project them into 2-D images using the splatting technique. Compared with the existing methods, CryoGS achieves significant improvements in resolution, isotropy, and computational efficiency. For example, CryoGS achieves a resolution of 2.217 $\AA$ on EMPIAR-10492 dataset, approaching its theoretical limit of 2.2 $\AA$, while the best resolution achieved by the existing methods is 3.805 $\AA$. Furthermore, CryoGS exhibits remarkable robustness in reconstructing heterogeneous structures and high-resolution models under extreme conditions such as pose inaccuracy, limited particle data, and high noise. Based on these results, we believe that CryoGS has great potential to be a powerful tool for Cryo-EM applications to ensure enhanced resolution, robustness, and efficiency.
  
cover: assets/images/covers/cryo-gs/teaser_pipeline.png
# second_image:

authors:
  - Shuaicheng Liu
  - Shen Cheng
  - Guikun Xu
  - Haoqiang Fan
  - Bing Zeng#
  
links:
  # Code: 
  PDF: https://www.researchsquare.com/article/rs-6178664/v1
---
