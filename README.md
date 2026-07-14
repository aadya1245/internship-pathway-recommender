# Internship Pathway Recommender

Internship Pathway Recommender recommends bridge experiences using descriptive pathway evidence. It does **not** predict hiring outcomes or measure personal potential. The included dataset is synthetic and deliberately small so ranking behavior can be inspected directly.

[View the live project](https://aadya1245.github.io/internship-pathway-recommender/)

## Run locally

```bash
npm test
npm run serve
```

## Implemented

- Editable skills, experiences, education, target role, organization, and season
- Browser-local profile persistence and automatic reranking
- Transparent rule, content-similarity, graph-path, and hybrid baselines
- Feature-grounded explanations (no invented LLM rationale)
- Counterfactual scenario simulation without mutating the profile
- One-click application of a simulated skill or experience to the saved profile
- Institution-feature ablation and sensitivity reporting
- Precision@k, recall@k, NDCG@k, and MRR implementations
- Deterministic ranking, metric, scenario, and ablation tests

## How it works

Profiles are represented through skills, projects, and experience types. Opportunities are scored by the gaps they address, the skills they build on, and the pathway evidence connecting them to a target role. The interface keeps the explanation tied to those exact scoring features and shows uncertainty when the comparison data is limited.

## Model comparison plan

1. Fixed-weight rules provide a human-auditable floor.
2. Content scoring measures structured skill overlap.
3. Path scoring captures common sequences without implying causation.
4. The hybrid combines gap fit, skill overlap, path evidence, and a prior.
5. A production study adds logistic/gradient-boosted rankers only after collecting licensed, consented outcomes.

## Responsible use / model card

- No names, photos, protected attributes, sensitive inference, or application automation.
- Institution identity is optional, treated as potentially biased, and tested through controlled-pair ablation.
- Explanations are derived from features used by the scorer.
- Sparse subgroup coverage must be displayed as uncertainty.
- Recommendations describe dataset patterns and never determine an individual’s potential or likelihood of being hired.
- The UI’s model comparison figures are labeled demo fixtures, not fabricated experimental findings.
