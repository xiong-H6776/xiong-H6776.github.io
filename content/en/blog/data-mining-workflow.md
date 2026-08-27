---
title: "What a Reproducible Data Analysis Should Preserve"
description: "A minimal but complete record that allows an analysis to be rerun and inspected."
date: 2026-08-19
categories: ["Data Analysis"]
tags: ["Reproducibility", "Experiment Records", "Python"]
draft: false
---

Reproducibility means more than uploading code. A genuinely reproducible analysis should tell your future self where the data came from, what execution order was used, and why each important choice was made.

## Data Description

Record at least the source of the raw data, acquisition date, field definitions, units, and known defects. If the original data cannot be made public, retain a small de-identified sample and a data dictionary.

## Runtime Environment

Record the language and versions of core tools, and fix the random seed. Unrelated software details do not need to be preserved, but anything that can affect the result should be explicit.

```python
import numpy as np

RANDOM_SEED = 42
rng = np.random.default_rng(RANDOM_SEED)
```

## Analysis Workflow

Separate raw-data processing, exploratory analysis, modeling, and result generation into clear stages. Each stage should have defined inputs and outputs, without relying on intermediate files copied and pasted by hand.

## Results and Conclusions

Figure titles should identify the object and conditions, and axes should include units. Conclusions should record not only what was found, but also:

- which assumptions the result is sensitive to;
- which samples were excluded and why;
- whether uncontrollable confounding factors remain;
- which additional data would be most valuable next.

When this information is stored together with the code, a one-off exercise becomes a knowledge asset that can be extended over time.
