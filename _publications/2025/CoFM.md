---
title:          "CoFM: Molecular Conformation Generation via Flow Matching in SE(3)-Invariant Latent Space"
date:           2025-07-19
selected:       true
pub:            "Forty-Second International Conference on Machine Learning GenBio Workshop"
# pub_pre:        "Submitted to "
# pub_post:       ' (Under review)'
pub_last:       ' <span class="badge badge-pill badge-publication badge-success">ICML25 GenBio</span>'
pub_date:       "2025-07"

abstract: >-
  Current leading methods for molecular conformation generation often rely on computationally intensive diffusion models in 3D space, which struggle with accurately modeling conformational manifolds and rigorously maintaining SE(3) equivariance. These limitations hinder both performance and efficiency, and can complicate integration with standard tools like RDKit. To overcome these challenges, we introduce CoFM, a novel generative framework that pioneers the concept of an autoencoder-induced, fully SE(3)-invariant latent space. This approach decouples SE(3) equivariance constraints from the generation process, enabling seamless integration of RDKit’s physicochemical priors. Furthermore, CoFM is the first to integrate latent flow matching within this invariant geometric subspace, significantly enhancing generation efficacy with fewer iterative steps. Experimental validation demonstrates that our method generates high-quality results with fewer iterations, achieving significant improvements in key Precision metrics and ensuring greater energy authenticity.

cover: assets/images/covers/cofm/ConFLFM.pdf
# second_image:
authors:
  - Guikun Xu*
  - Yankai Yu*
  - Yongquan Jiang#
  - Yan Yang
  - Yatao Bian#
  
links:
  # Code: 
  PDF: https://openreview.net/pdf?id=C0jrjy4F1D
---
