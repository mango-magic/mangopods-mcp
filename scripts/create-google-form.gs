function createMangoPodsMcpFounderBetaApplication() {
  const form = FormApp.create("MangoPods MCP Founder Beta Application");

  form.setDescription(
    "MangoPods MCP is opening private founder beta access. Public demo mode shows the workflow shape. Real MCP access, API keys, credits, partner scopes, and production usage are granted to the strongest applicants first."
  );
  form.setConfirmationMessage(
    "You are on the MangoPods MCP founder beta list. We prioritise applications by reach, workflow quality, ability to test in July, credit potential, and proof value. If your use case is a fit, we will follow up."
  );
  form.setCollectEmail(false);
  form.setAllowResponseEdits(false);
  form.setLimitOneResponsePerUser(false);

  form.addTextItem()
    .setTitle("Full name")
    .setRequired(true);

  const emailValidation = FormApp.createTextValidation()
    .requireTextIsEmail()
    .setHelpText("Use a valid email address.")
    .build();

  form.addTextItem()
    .setTitle("Email address")
    .setRequired(true)
    .setValidation(emailValidation);

  const linkedInValidation = FormApp.createTextValidation()
    .requireTextMatchesPattern("^https?://(www\\.)?linkedin\\.com/.+")
    .setHelpText("Use a LinkedIn profile URL.")
    .build();

  form.addTextItem()
    .setTitle("LinkedIn profile URL")
    .setRequired(true)
    .setValidation(linkedInValidation);

  form.addTextItem()
    .setTitle("Company, product, or project name")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Website or product URL")
    .setRequired(false);

  form.addMultipleChoiceItem()
    .setTitle("Which best describes you?")
    .setChoiceValues([
      "Vibe coder / builder",
      "Agency / studio",
      "Creator / podcast operator",
      "SaaS / product team",
      "Internal team",
      "Partner app / marketplace",
      "Other"
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("What do you want to build with MangoPods MCP?")
    .setHelpText("Describe the agent, app, product, client workflow, or internal process you want to connect.")
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Which first workflow would you test?")
    .setChoiceValues([
      "Podcast episode launch pack",
      "Webinar to pipeline pack",
      "Customer call to proof page",
      "Pod idea to carousel and teleprompter",
      "Video clip farm",
      "Website or landing page generation",
      "LinkedIn content and boost workflow",
      "Agency client content sprint",
      "Partner app / credit resale workflow",
      "Other"
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("Who would this reach?")
    .setHelpText("Tell us about your users, clients, audience, community, team, or customer base.")
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("How many users, clients, subscribers, followers, or internal teammates could this reach in the next 90 days?")
    .setChoiceValues([
      "1-10",
      "11-100",
      "101-1,000",
      "1,001-10,000",
      "10,001+",
      "Not sure yet"
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Can you test in July?")
    .setChoiceValues([
      "Yes - I can test immediately",
      "Yes - I can test later in July",
      "Maybe - I need to confirm",
      "No - I am researching for later"
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("How do you expect to use credits?")
    .setChoiceValues([
      "Use MangoPods credits directly",
      "Bring my own MangoPods workspace",
      "Bundle credits inside my product",
      "Resell fixed creative jobs",
      "Agency or studio margin model",
      "Not sure yet"
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Would you be open to sharing a public case study if it works?")
    .setChoiceValues([
      "Yes",
      "Maybe",
      "No"
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("What tools are you using today for podcast, video, website, content, or campaign production?")
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle("Anything else we should know?")
    .setRequired(false);

  Logger.log("Published URL: " + form.getPublishedUrl());
  Logger.log("Editor URL: " + form.getEditUrl());
}
