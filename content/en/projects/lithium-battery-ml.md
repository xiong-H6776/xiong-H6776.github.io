---
title: "Composition-Based Prediction of Thermal Expansion Coefficients for Solid-State Lithium Battery Materials"
description: "Supervised-learning prediction of thermal expansion coefficients for lithium-containing compounds and preliminary thermal matching of electrode–electrolyte pairs."
featured_image: "/images/projects/lithium-battery-ml.png"
weight: 30
tags: ["Solid-State Lithium Batteries", "Supervised Learning", "Random Forest", "Feature Engineering"]
---

## Project Overview

This project investigates whether the thermal expansion coefficient (TEC) of lithium-containing compounds can be predicted from chemical composition alone, enabling preliminary screening of thermomechanical compatibility between solid-state battery electrodes and electrolytes. A random forest was used as the baseline model. Composition features, physicochemical descriptors, and a multilayer residual-cascade structure were introduced to improve prediction, and a DFT result was used as a case study. The final model was then applied to lithium-containing compounds from the Materials Project database.

## Background

All-solid-state lithium-ion batteries replace flammable liquid electrolytes with solid electrolytes and offer potential improvements in safety and stability. Their electrode–electrolyte interfaces are solid–solid contacts, however. A mismatch in thermal expansion coefficients can reduce interfacial contact area, increase ion-transport resistance, or generate cracks and thermal stress as temperature changes, ultimately affecting performance and lifetime.

Conventional materials screening relies on experiments or computationally intensive simulations and cannot rapidly cover a large candidate space. Existing machine-learning approaches often require detailed crystal-structure information, which is not always readily available. This project therefore explores chemical formulas and derived descriptors as low-cost inputs for TEC prediction, providing a preliminary filter before higher-fidelity structural calculations and experiments.

## Main Contributions

- Compiled experimental and simulation TEC data from the literature, constructed a dataset of 428 compounds, and cleaned value ranges and anomalous records.
- Compared random forest, k-nearest neighbors, and XGBoost models. Random forest was selected as the baseline and enhanced using centered log-ratio transformation, thermodynamic electronegativity, and Magpie descriptors.
- Built a three-layer residual-cascade random forest, evaluated a LiF case against a DFT result, and predicted TEC values for 8,271 filtered lithium-containing compounds from the Materials Project to identify preliminary thermal-matching candidates.

## Methodology

The initial models used elemental composition and element counts derived from each chemical formula. Random forest, k-nearest neighbors, and XGBoost were compared on the test set, with random forest providing the strongest baseline and therefore serving as the basis for subsequent improvements.

Feature engineering included a centered log-ratio (CLR) transformation of the sparse composition matrix, thermodynamic electronegativity (TEN), and pymatgen/Magpie descriptors such as valence-electron counts, electronegativity, covalent radius, magnetic moment, and atomic volume. These descriptors supplement the physicochemical information implicit in a chemical formula.

The final architecture used a three-layer residual-cascade random forest. Each later layer fitted the residuals from the preceding layer while receiving both the original features and previous predictions; the layer outputs were then summed. After a LiF case study against DFT and experimental references, the model was applied to database-scale materials screening.

## Technologies

- Python
- Random Forest Regression
- K-Nearest Neighbors
- XGBoost
- Feature Engineering
- Centered Log-Ratio Transformation
- pymatgen / Magpie
- Density Functional Theory
- Materials Project

## Results

- The baseline random-forest model achieved an R² of 0.79. After feature engineering and the three-layer residual-cascade architecture were introduced, the project document reported a final R² of 0.87.
- For LiF, the model predicted a TEC of 30.8×10⁻⁶ K⁻¹, compared with an experimental reference of 34×10⁻⁶ K⁻¹, corresponding to a deviation of approximately 9.4%.
- TEC values were predicted for 8,271 filtered lithium-containing compounds, yielding several candidate combinations whose TEC values were close to those of common electrode materials.
- The method is suitable for rapid order-of-magnitude prescreening, but chemical composition cannot represent crystal structure, lattice symmetry, or coordination environment. Different structures with the same composition may also have different TEC values, so candidate results still require structural calculations and experimental validation.

## Output

- This work is retained as a research-practice project. It does not currently have a formal paper, award, or code release suitable for public presentation.

## Related Materials

- Project document: an English Word version is available locally and will be reviewed before any public release.
- Data and code: no public-ready version is currently retained in the project materials.
- Model figures and candidate-material results: stored in the existing project document and not currently available for download.
