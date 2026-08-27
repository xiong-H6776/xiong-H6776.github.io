---
title: "Knock Mechanisms and Phenomenological Modeling for Hydrogen Internal Combustion Engines"
description: "Development of an integrated quasi-dimensional combustion and phenomenological knock model, calibrated and validated against engine test-bench data."
featured_image: "/images/projects/hydrogen-engine-knock.png"
weight: 10
tags: ["Hydrogen Engine", "Knock Modeling", "Machine Learning", "MATLAB"]
---

## Project Overview

This project addresses knock prediction in hydrogen internal combustion engines by developing a quasi-dimensional combustion model and a phenomenological knock model, then coupling them online into an integrated combustion–knock simulation framework. The model evaluates in-cylinder combustion and knock tendency under varying compression ratios, spark timings, and equivalence ratios. It provides a basis for analyzing operating boundaries, developing control strategies, and building virtual engine models for hydrogen-fueled engines.

## Background

Hydrogen has a wide flammability range, high laminar flame speed, and carbon-free combustion, making it a promising fuel for decarbonizing internal combustion engines. However, its low ignition energy and high reactivity also increase the risk of pre-ignition, backfire, and knock under high-load and high-compression-ratio conditions. Knock limits further improvements in compression ratio, thermal efficiency, and power density, and severe knock may cause structural damage.

Three-dimensional CFD can provide detailed in-cylinder flow information, but its computational cost makes it unsuitable for extensive operating-condition sweeps or rapid control-oriented simulations. This project therefore uses a computationally efficient two-zone quasi-dimensional combustion model to describe in-cylinder thermodynamic processes, together with a phenomenological model for end-gas autoignition and knock tendency, balancing simulation speed with physical representation.

## Main Contributions

- Reworked the thermophysical-property calculations within a two-zone quasi-dimensional combustion framework and built a hydrogen-engine cycle model using a single-zone zero-dimensional formulation outside combustion and a two-zone quasi-dimensional formulation during combustion.
- Generated laminar flame-speed data over the target operating range using Python and Cantera, trained a random-forest regression model, optimized its hyperparameters through Bayesian optimization, and integrated it into the main loop of the quasi-dimensional combustion model.
- Developed a phenomenological knock module based on the Livengood–Wu autoignition integral, a thermal boundary-layer assumption, and an autoignition-flame quenching criterion. The module was coupled online with the combustion model and calibrated and validated using a genetic algorithm and hydrogen-engine test-bench data.

## Methodology

Single-zone and two-zone governing equations were formulated from mass conservation, energy conservation, and combustion-chamber geometry to calculate transient states such as in-cylinder pressure and burned- and unburned-zone temperatures. To reduce dependence on external thermodynamic solvers, selected thermophysical properties were obtained from established correlations or independent calculation routines.

Because hydrogen laminar flame speed is jointly affected by temperature, pressure, and excess-air ratio, 54,840 samples were generated with Cantera's one-dimensional freely propagating flame solver. A random-forest regressor was trained using unburned-gas temperature, cylinder pressure, and excess-air ratio as inputs, with Bayesian optimization used for hyperparameter search.

Knock onset was modeled with a Livengood–Wu integral representing cumulative end-gas autoignition. A thermal boundary-layer quenching criterion and the unburned-gas mass fraction in the boundary layer were introduced to characterize knock tendency. The phenomenological module was embedded in the stepwise iteration loop of the quasi-dimensional model so that combustion and knock could be solved together. Turbulent-combustion parameters were then calibrated against cylinder-pressure prediction error using a genetic algorithm, and the model was validated under normal-combustion, light-knock, moderate-knock, and severe-knock conditions.

## Technologies

- MATLAB
- Python
- Cantera
- Random Forest Regression
- Bayesian Optimization
- Genetic Algorithm
- Livengood–Wu Integral

## Results

- The random-forest laminar flame-speed model achieved an R² of 0.9989 and a root-mean-square error of 0.1286 m/s on the test set.
- Under normal-combustion conditions, the quasi-dimensional combustion model achieved a global cylinder-pressure RMSE of 1.76 bar, a mean absolute percentage error of 2.93%, and a peak-pressure relative error of 1.89%.
- The phenomenological knock model agreed with experimental classifications for non-knocking, moderate-knock, and severe-knock cases, but misclassified light knock. Predicted knock onset still requires improvement through better ignition-delay modeling, temperature correction, and combustion-parameter calibration under knocking conditions.
- Online coupling between the quasi-dimensional combustion model and the phenomenological knock module was completed, providing a simulation foundation for future studies of hydrogen-engine operating limits and knock-mitigation strategies.

## Output

- Completed the undergraduate thesis *Knock Mechanisms and Phenomenological Modeling for Hydrogen Internal Combustion Engines*.

## Related Materials

- Project code: archived locally; public release will follow code organization, execution checks, and removal of sensitive information.
- Documentation: model flowcharts, validation figures, and explanatory materials are being organized.
- Undergraduate thesis: currently stored as a Word document; a public PDF will be added after an appropriate version is prepared and confirmed.
