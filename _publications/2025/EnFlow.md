---
title:          "Energy-Guided Flow Matching Enables Few-Step Conformer Generation and Ground-State Identification"
date:           2025-12-27
selected:       true
# pub:            " "
# pub_pre:        "Submitted to "
pub_post:       'Under review'
pub_last:       '<span class="badge badge-pill badge-publication badge-success">Preprint</span>'
pub_date:       "2025-12"

abstract: >-
  Generating low-energy conformer ensembles and identifying ground-state conformations from molecular graphs remain computationally demanding with physics-based pipelines. Current learning-based approaches often suffer from a fragmented paradigm: generative models capture diversity but lack reliable energy calibration, whereas deterministic predictors target a single structure and fail to represent ensemble variability. Here we present EnFlow, a unified framework that couples flow matching (FM) with an explicitly learned energy model through an energy-guided sampling scheme defined along a non-Gaussian FM path. By incorporating energy-gradient guidance during sampling, our method steers trajectories toward lower-energy regions, substantially improving conformational fidelity, particularly in the few-step regime. The learned energy function further enables efficient energy-based ranking of generated ensembles for accurate ground-state identification. Extensive experiments on GEOM-QM9 and GEOM-Drugs demonstrate that EnFlow simultaneously improves generation metrics with 1--2 ODE-steps and reduces ground-state prediction errors compared with state-of-the-art methods.
  
cover: assets/images/covers/enflow/EnFlow.png
# second_image:

authors:
  - Guikun Xu
  - Xiaohan Yi
  - Peilin Zhao#
  - Yatao Bian#
  
links:
  Code: https://github.com/Rich-XGK/EnFlow.git
  PDF: https://arxiv.org/abs/2512.22597
---
