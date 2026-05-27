---
title:          "Energy-Guided Generative Modeling for Low-Energy Molecular Structure Discovery"
date:           2025-12-27
selected:       true
# pub:            " "
# pub_pre:        "Submitted to "
pub_post:       'Under review'
pub_last:       '<span class="badge badge-pill badge-publication badge-success">Preprint</span>'
pub_date:       "2025-12"

abstract: >-
  Exploring molecular energy landscapes and identifying ground-state conformations are central challenges in computational chemistry. However, generating diverse low-energy conformers from molecular graphs remains expensive with traditional physics-based pipelines. Existing learning-based approaches remain fragmented: generative models capture conformational diversity but often lack reliable energy calibration, whereas deterministic predictors focus on a single structure and fail to represent ensemble variability. Here we introduce EnFlow, to our knowledge, the first energy-guided generative framework that couples flow-based conformer generation with explicit energy landscape modeling for joint conformational ensemble generation and ground-state identification. By integrating generative dynamics with a learned energy model, EnFlow guides sampling toward low-energy regions of the conformational landscape, improving structural fidelity under extremely few sampling steps while enabling energy-based ranking of generated conformations. Experiments on GEOM-QM9 and GEOM-Drugs show that EnFlow achieves strong performance in conformer generation and ground-state identification while requiring only 1--2 ODE sampling steps. Single-point GFN2-xTB evaluations further show that the learned energy scores preserve physically meaningful energetic rankings of generated conformations. These results support explicit energy landscape modeling as an effective strategy for low-energy molecular structure discovery through joint modeling of conformational ensembles and their associated energies.
  
cover: assets/images/covers/enflow/EnFlow.png
# second_image:

authors:
  - Guikun Xu
  - Xiaohan Yi
  - Ziqiao Meng
  - Peilin Zhao#
  - Yatao Bian#
  
links:
  Code: https://github.com/Rich-XGK/EnFlow.git
  PDF: https://arxiv.org/abs/2512.22597
---
