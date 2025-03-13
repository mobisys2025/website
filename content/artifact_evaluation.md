---
title: "Artifact Evaluation"
---

{{< button
    link="https://mobisys25ae.hotcrp.com" 
    icon="article"
    text="Artifact Submission" 
>}}

{{< button
    link="https://forms.gle/xSo6VVFr8atqE7ff8" 
    icon="mentor"
    text="TPC Self Nomination Form" 
>}}

At MobiSys, we aim to promote high-quality research in mobile systems and to advance the state of the art. However, traditional peer-review of papers alone cannot guarantee the reproducibility of the research results. The Artifact Evaluation process complements the paper review process by verifying that the artifacts (e.g., code, data, scripts, or instructions) associated with a paper are correct, complete, and properly documented. The Artifact Evaluation committee also provides feedback to authors to improve the artifacts and ensure that they are reusable by others in the community.

**We solicit interest from the community to serve on the MobiSys 2025 Artifact Evaluation TPC. Faculty, postdocs and students are all welcome to apply. Please self-nominate using the form below: 
[https://forms.gle/xSo6VVFr8atqE7ff8](https://forms.gle/xSo6VVFr8atqE7ff8).**

## Important Dates

{{< important-date-table "artifact_important_dates.csv" >}}

## Process Overview

1. **Submission**: Authors of conditionally accepted papers should use https://mobisys25ae.hotcrp.com/ to submit their conditionally accepted papers for artifact evaluation. We provide guidelines below to prepare research artifacts for submission.
2. **Feedback and Revision**: The Artifact Evaluation committee will independently review (single-blind; reviewer identity not disclosed) the submitted artifacts, focusing on reproducibility, functionality, and adherence to the paper's claims. The committee may communicate with the authors during this phase to clarify any questions or request additional information.
3. **Badges and Recognition**: The Artifact Evaluation committee will provide feedback to the authors. If required, authors may be asked to revise their artifacts based on the committee's suggestions. The process may involve several iterations to ensure that the artifacts meet the evaluation criteria.
4. **Search and Discoverability**: Authors will apply for specific ACM badges for "Artifact available", "Artifact evaluated - functional", "Results reproduced" for Artifact Evaluation committee evaluation. These badges are independent, and authors may seek one, two, or all three of the badges for their papers. Badges that pass Artifact Evaluation committee approval will be printed on the papers and included as meta information in the ACM Digital Library. Authors can also include up to two pages of their Artifact Appendix in the camera-ready version of the paper.

## Guidelines for the preparation of research artifacts (for the authors)

- When submitting a paper for artifact evaluation, authors should prepare a short appendix to your paper, describing how to install and run your artifact. Include a full list of hardware and software requirements. Use this [template](https://github.com/ctuning/artifact-evaluation/blob/master/docs/template/ae.tex) for drafting the artifact appendix and use this artifact [checklist](https://github.com/ctuning/artifact-evaluation/blob/master/docs/checklist.md) to make sure that the artifact appendix contains all the necessary information.
- The artifacts should contain a minimum working example, e.g., workflow scripts, to demonstrate that the artifact works, such that the artifact evaluators know that the basic functionalities of the artifact are easily reproducible. It would be better if the provided workflow scripts can be used by the reviewers to automatically repeat the listed experiments with the minimum involvement/help from the authors. Existing tools such as the Collective Knowledge (CK) project can be used for such automation purposes. If such scripts cannot be made or operated by the reviewers due to involvement of proprietary or custom hardware/software, the authors should instead provide remote access to artifacts as described below.
- Artifact should specify how much time it takes to run each component of the artifact and what the hardware requirements are to run the artifact.
- Source code of the artifact can be shared through openly accessible repositories such as http://github.com or http://gitlab.com or dedicated links provided directly to the artifact evaluators.
- After the artifact acceptance please put your artifact on publicly accessible repositories such as https://zenodo.org/, https://figshare.com/, or http://datadryad.org/ to have "Artifact Available" badge awarded. These repositories will generate a dedicated DOI link for your repository, which you should add to the Artifact appendix of your accepted paper.
- For software-only research artifacts, authors should submit the artifact as a container, e.g., using https://www.virtualbox.org/ or https://www.docker.com/.
- For hardware-dependent research artifacts, authors provide the ability for the artifact evaluators to remotely (and anonymously) connect to the hardware setup to assess the artifact, e.g., using Zoom, Microsoft Teams, or Google Hangouts with anonymous accounts for both parties.

## Artifact Evaluation Methods and Criteria (including badge-specific guidelines)

The following guidelines build on and complement the ACM's guidelines on artifact review for different badges (https://www.acm.org/publications/policies/artifact-review-badging), but are specific to the hardware and software artifacts of papers published at SIGMOBILE conferences (e.g., MobiCom, MobiSys, SenSys, etc). It is recommended that the artifact evaluation committee members bid on the submitted artifacts, so that the artifacts can be reviewed by reviewers with the appropriate expertise. Conflict of Interests should be handled in the similar way as it is in regular paper submission. The reviewers are encouraged to use the following guidelines as the reference in artifact evaluation, and to communicate with the authors as necessary via the submission site (e.g., HotCRP). At the end of the review period, each reviewer should submit recommendations about the badges to be granted, and it will be the artifact evaluation committee chairs' discretion to make final decisions.

### Artifacts Available

Default ACM guidelines will apply to evaluating this badge. For software artifacts, a publicly accessible DOI or link to the source code repository along with a unique identifier must be provided, in order to receive this badge. For hardware artifacts, similar accessibility to all the source files of hardware designs and source codes of associated firmware should be provided.

### Artifacts Evaluated - Functional

For software artifacts that do not involve modification of hardware, we encourage reviewers who own the listed hardware and software systems that are required by the artifacts to bid these artifacts. The reviewers will then use the authors' submitted workflow scripts to operate the artifacts on the reviewers' systems, and follow standard ACM guidelines to evaluate for badges of "Artifacts Evaluated – Functional" and "Artifacts Evaluated – Reusable". During the review period, the reviewers can reach out to authors to ask for further explanations on using the scripts, or request for further revisions on the scripts.

In cases where reviewers with the required hardware or software systems to operate the artifacts cannot be found, remote access to the authors' machines should be used instead for artifact evaluation. Refer to the following paragraph for remote access.

For hardware artifacts, the authors are responsible to provide remote access for the reviewers to access the authors' machines and operate the artifacts. Commonly used remote access tools such as TeamViewer can be used for such purpose, and the authors are responsible to schedule evaluation appointments with the reviewers. In evaluation via remote access, the authors should make sure that reviewers have full control over the artifacts and operate the entire artifact workflow, including but not limited to, compiling the source codes, uploading the compiled binaries to the target system, configure the target hardware system, start hardware system operations and execute experiments listed in the artifact appendix. During this procedure, the authors are allowed to communicate with reviewers via audio/video chats and provide necessary instructions and explanations.

### Results Reproduced

Reviewers are requested to make judgments based on the key results to be reproduced that are listed in the authors' artifact appendix being submitted, and evaluate if these key results can be reproduced using the artifact submitted by the authors. It is up to the reviewers' discretion to decide whether the key results listed by the authors cover all the main results reported in the paper, and reviewers have the right to add more results to be evaluated from those reported in the paper.

However, due to the practical difficulty of evaluating the reproducibility of the following types of artifacts, special evaluation criteria can be applied as described below.

- **Experiment results that require large amounts of repeating experiments**
  
  Given that many key results in mobile systems papers are statistical and hence require large amounts of repeating experiments in the same or different settings, it would be hard to reproduce the exact same experiment results in artifact evaluation. In these cases, upon the mutual agreement between the reviewers and the authors, the authors could prepare and submit a demo video that is made by operating their workflow scripts being submitted and demonstrates all the key system functionalities in the artifact. The reviewers could then follow the workflow scripts and demo video to evaluate if the demonstrated system functionalities can be reproduced/replicated. It is the reviewer's discretion to decide if the demo video sufficiently reflects the key results being reported in the paper.

- **For experiment results that are subject to specific environmental settings or conditions**
  
  Similar as above, the authors are responsible to make sure that 1) these environmental settings and conditions are fully reflected in the demo video; and 2) when artifacts are evaluated via remote access, these settings and conditions are fully replicated at the authors' side. It is the reviewer's discretion to decide if the environmental settings and conditions match those described in the paper.

- **For experiment results that involve large amounts of computations, data collections or transmissions that are time consuming**

  The reviewers and the authors could communicate to decide a reduced but still representative scope of experiments that can be completed within a reasonable time frame. Examples of such reduced but representative scope include a) a subset of a public dataset with the same dimensionality (e.g., number of classes); b) a reduced amount of data transmissions under the same transmission link conditions.

- **For experiment results that involve human subjects**

  The authors are responsible to provide access to the system artifacts that are deployed on human subjects with the same conditions and system configurations as described in the paper. Similar to above, the authors are also responsible to provide a demo video that instructs the reviewers to safely operate the artifact over human subjects. Such access, if being provided by remote access, is subject to IRB approval at the authors' institutions.

## Additional information

- ACM Artifact Review Bading Explanation https://www.acm.org/publications/policies/artifact-review-badging#appendix
- cTuning Foundation Artifact Evaluation Information https://ctuning.org/ae/
- Software Systems Conferences Artifacts Guideline https://sysartifacts.github.io/chair-guide.html
- Thoughts about Artifact Badging https://eng.ox.ac.uk/media/5209/zilberman2020thoughts.pdf

## Disclaimer

This text reuses the MobiSys 2024 Artifact Evaluation submission call, which used an adapted version of the ASPLOS 2022 call for artifacts. We thank ASPLOS 2022 artifact evaluation chairs for this inspiration. We also thank the SIGMOBILE Research Artifact Committee for their feedback and support.

## Artifact Evaluation Chairs:

- Yaxiong Xie: [yaxiongx@buffalo.edu](mailto:yaxiongx@buffalo.edu)
- Ashwin Ashok: [aashok@gsu.edu](mailto:aashok@gsu.edu)
