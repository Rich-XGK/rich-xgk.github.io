---
title:          "CrystalDiT: Simple Diffusion Transformers for Crystal Generation"
date:           2025-10-08
selected:       true
pub:            "The 40th Annual AAAI Conference on Artificial Intelligence"
# pub_pre:        "Submitted to "
# pub_post:       ' (Under review)'
pub_last:       ' <span class="badge badge-pill badge-publication badge-success">AAAI26</span>'
pub_date:       "2025-10"

abstract: >-
  We present CrystalDiT, a diffusion transformer for crystal structure generation that achieves state-of-the-art performance by challenging the trend of architectural complexity. Instead of intricate, multi-stream designs, CrystalDiT employs a unified transformer that imposes a powerful inductive bias: treating lattice and atomic properties as a single, interdependent system. Combined with a periodic table-based atomic representation and a balanced training strategy, our approach achieves 9.62% SUN (Stable, Unique, Novel) rate on MP-20, substantially outperforming recent methods including FlowMM (4.38%) and MatterGen (3.42%). Notably, CrystalDiT generates 63.28% unique and novel structures while maintaining comparable stability rates, demonstrating that architectural simplicity can be more effective than complexity for materials discovery. Our results suggest that in data-limited scientific domains, carefully designed simple architectures outperform sophisticated alternatives that are prone to overfitting..
  
cover: assets/images/covers/crystaldit/teaser_pipeline.png
# second_image:

authors:
  - Xiaohan Yi
  - Guikun Xu
  - Xi Xiao#
  - Zhong Zhang
  - Liu Liu
  - Yatao Bian
  - Peilin Zhao#
  
links:
  Code: https://github.com/hanyi2021/CrystalDiT.git
  PDF: https://arxiv.org/pdf/2508.16614
---
