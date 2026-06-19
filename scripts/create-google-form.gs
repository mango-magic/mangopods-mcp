const LIVE_FORM_ID = "1tf2_XAhjvNpgmHcJoKFHoVCPkcKlfFuvXBVPytiCpTk";
const CREATE_FRESH_RESPONSE_SHEET = true;

function rebuildMangoPodsMcpFounderBetaApplication() {
  const form = FormApp.openById(LIVE_FORM_ID);

  form.setTitle("MangoPods MCP Founder Beta Application");
  form.setDescription(
    "MangoPods MCP is opening private founder beta access on July 1. Public demo mode shows the workflow shape. Real MCP credentials, credits, partner scopes, LinkedIn boost workflows, and production usage are granted to the strongest applicants first. We prioritise real workflows, reach, July testing capacity, credit potential, and public proof value."
  );
  form.setConfirmationMessage(
    "You are on the MangoPods MCP founder beta list. We prioritise applications by reach, workflow quality, ability to test in July, credit potential, and proof value. If your use case is a fit, we will follow up with next steps."
  );
  form.setCollectEmail(false);
  form.setAllowResponseEdits(false);
  form.setLimitOneResponsePerUser(false);
  form.setAcceptingResponses(true);
  try { form.setRequireLogin(false); } catch (error) {}
  try { form.setShowLinkToRespondAgain(false); } catch (error) {}
  try { form.setProgressBar(true); } catch (error) {}

  const items = form.getItems();
  for (let index = items.length - 1; index >= 0; index--) {
    form.deleteItem(items[index]);
  }

  const emailValidation = FormApp.createTextValidation()
    .requireTextIsEmail()
    .setHelpText("Use the email address you want us to contact.")
    .build();

  const linkedInValidation = FormApp.createTextValidation()
    .requireTextMatchesPattern("^https?://(www\\.)?linkedin\\.com/.+")
    .setHelpText("Paste your LinkedIn profile or company page URL.")
    .build();

  addSection_(form, "Identity", "Tell us who you are and where to find you.");

  form.addTextItem()
    .setTitle("Full name")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Email address")
    .setRequired(true)
    .setValidation(emailValidation);

  form.addTextItem()
    .setTitle("LinkedIn profile URL")
    .setRequired(true)
    .setValidation(linkedInValidation);

  form.addTextItem()
    .setTitle("Company, product, community, or project name")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Website, product, or community URL")
    .setRequired(false);

  form.addMultipleChoiceItem()
    .setTitle("Which best describes you?")
    .setChoiceValues([
      "Vibe coder / independent builder",
      "Agency / studio",
      "Creator / podcast operator",
      "SaaS / product team",
      "Internal marketing or enablement team",
      "Partner app / marketplace",
      "Enterprise media or demand team",
      "Other"
    ])
    .setRequired(true);

  addSection_(form, "Use case", "We want the people who can prove a sharp workflow quickly.");

  form.addParagraphTextItem()
    .setTitle("What do you want to build with MangoPods MCP?")
    .setHelpText("Describe the agent, app, product, client workflow, or internal process you want to connect.")
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Which first workflow would you test?")
    .setChoiceValues([
      "Podcast episode launch pack",
      "Pod idea generator to carousel and teleprompter guide",
      "Webinar to pipeline pack",
      "Customer call to proof page",
      "Video clip farm",
      "Website or landing page generation",
      "LinkedIn content and targeted boost workflow",
      "Agency client content sprint",
      "Partner app / credit resale workflow",
      "White-label creative job workflow",
      "Other"
    ])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle("Which MangoPods capabilities do you need first?")
    .setChoiceValues([
      "Podcast idea generation",
      "Podcast or video editing",
      "Short-form clips and captions",
      "Carousels and social creative",
      "Teleprompter guides and scripts",
      "Website or landing page creation",
      "LinkedIn posts and targeted boosts",
      "Approval workflows",
      "Credit caps and usage reporting",
      "White-label or resale workflows"
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("Write one prompt you would want your agent to run on day one")
    .setHelpText("Example: Turn this 45-minute podcast into a launch pack with clips, a page, LinkedIn posts, and a capped boost to CISOs in the UK.")
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("What tools are you using today for podcast, video, website, content, or campaign production?")
    .setRequired(false);

  addSection_(form, "Reach and timing", "We are choosing the first cohort by distribution, speed, and proof value.");

  form.addParagraphTextItem()
    .setTitle("Who would this reach?")
    .setHelpText("Tell us about your users, clients, audience, community, team, customers, or launch channels.")
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

  form.addCheckboxItem()
    .setTitle("Where could you share or ship the beta story if it works?")
    .setChoiceValues([
      "LinkedIn",
      "Product Hunt",
      "Hacker News / Show HN",
      "Reddit",
      "Indie Hackers",
      "Newsletter",
      "Client base",
      "Internal company rollout",
      "App marketplace",
      "I would rather stay private"
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
    .setTitle("Do you already have a source asset or workflow ready to test?")
    .setChoiceValues([
      "Yes - podcast, webinar, demo, call, or video ready now",
      "Yes - idea/workflow ready but no asset yet",
      "Soon - we can prepare one in July",
      "No - still exploring"
    ])
    .setRequired(true);

  form.addTextItem()
    .setTitle("Optional source asset, demo, podcast, website, or example URL")
    .setRequired(false);

  addSection_(form, "Credits and commercial model", "MangoPods is credit-powered. We want to understand how serious the usage path is.");

  form.addMultipleChoiceItem()
    .setTitle("How do you expect to use MangoPods credits?")
    .setChoiceValues([
      "Use MangoPods credits directly",
      "Bring my own MangoPods workspace",
      "Bundle credits inside my product",
      "Resell fixed creative jobs",
      "Agency or studio margin model",
      "Internal team usage",
      "Not sure yet"
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("What monthly usage feels realistic if the beta works?")
    .setChoiceValues([
      "A few test jobs per month",
      "10-50 creative jobs per month",
      "51-250 creative jobs per month",
      "251-1,000 creative jobs per month",
      "1,000+ creative jobs per month",
      "Not sure yet"
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Are you interested in embedding, reselling, or white-labelling MangoPods workflows?")
    .setChoiceValues([
      "Yes - embed inside my app",
      "Yes - resell as fixed creative jobs",
      "Yes - white-label for clients",
      "Maybe - I want to explore",
      "No - I only want direct usage"
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Would you be open to sharing a public case study if it works?")
    .setChoiceValues([
      "Yes - happy to be public",
      "Maybe - depends on the result",
      "No - private use only"
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("Anything else we should know?")
    .setHelpText("Tell us about deadlines, launch plans, unusual workflows, client opportunities, or technical constraints.")
    .setRequired(false);

  form.addCheckboxItem()
    .setTitle("Beta access acknowledgement")
    .setChoiceValues([
      "I understand MangoPods MCP is in private beta and Many Mangoes may contact me about this application."
    ])
    .setRequired(true);

  const spreadsheet = ensureResponseSpreadsheet_(form);

  Logger.log("Published URL: " + form.getPublishedUrl());
  Logger.log("Editor URL: " + form.getEditUrl());
  Logger.log("Responses sheet: " + spreadsheet.getUrl());
}

function addSection_(form, title, helpText) {
  form.addSectionHeaderItem()
    .setTitle(title)
    .setHelpText(helpText);
}

function ensureResponseSpreadsheet_(form) {
  let spreadsheet;
  if (CREATE_FRESH_RESPONSE_SHEET) {
    spreadsheet = SpreadsheetApp.create("MangoPods MCP Founder Beta Applications - Responses");
    form.setDestination(FormApp.DestinationType.SPREADSHEET, spreadsheet.getId());
  } else if (form.getDestinationId()) {
    spreadsheet = SpreadsheetApp.openById(form.getDestinationId());
  } else {
    spreadsheet = SpreadsheetApp.create("MangoPods MCP Founder Beta Applications - Responses");
    form.setDestination(FormApp.DestinationType.SPREADSHEET, spreadsheet.getId());
  }
  ensureRubricSheet_(spreadsheet);
  return spreadsheet;
}

function ensureRubricSheet_(spreadsheet) {
  let rubric = spreadsheet.getSheetByName("Triage Rubric");
  if (!rubric) rubric = spreadsheet.insertSheet("Triage Rubric");
  rubric.clear();

  const rows = [
    ["Category", "Points", "What to look for", "Reviewer notes"],
    ["Reach", 25, "Audience, users, clients, community, launch channels, or internal adoption potential.", ""],
    ["Use-case quality", 25, "Clear workflow with obvious MangoPods fit and a valuable output.", ""],
    ["Ability to ship", 20, "Can test in July, has a source asset, has a technical owner, and can give feedback.", ""],
    ["Revenue / credit potential", 15, "Likely recurring credits, resale, bundled workflows, agency margin, or internal volume.", ""],
    ["Proof value", 10, "Would make a strong public story, demo, launch example, or enterprise proof point.", ""],
    ["Feedback quality", 5, "Applicant is thoughtful, specific, and likely to help shape the product.", ""],
    ["", "", "", ""],
    ["Tier", "Score", "Decision", "Action"],
    ["Tier 1 - Founder access", "80-100", "Prioritise", "Send MCP onboarding and ask for first source asset."],
    ["Tier 2 - Builder access", "60-79", "Strong", "Qualify workflow and July availability."],
    ["Tier 3 - Partner watchlist", "40-59", "Interesting", "Route to agency/product follow-up."],
    ["Tier 4 - Later waitlist", "Under 40", "Later", "Keep warm and invite to public launch."],
    ["", "", "", ""],
    ["Follow-up prompts", "", "", ""],
    ["Vibe coders", "", "What agent/app do you want to connect first and what source asset can you test?", ""],
    ["Agencies", "", "What repeatable client workflow would you sell and how do you price it today?", ""],
    ["Product teams", "", "Where would MangoPods sit in the product journey and what action would users click?", ""],
    ["Creators/studios", "", "What back catalogue, podcast, webinar, or show workflow can you test in July?", ""],
    ["Partner apps", "", "Do you want BYO credits, bundled credits, resale, or white-label creative jobs?", ""]
  ];

  rubric.getRange(1, 1, rows.length, rows[0].length).setValues(rows);
  rubric.getRange("A1:D1").setFontWeight("bold");
  rubric.getRange("A9:D9").setFontWeight("bold");
  rubric.getRange("A15:D15").setFontWeight("bold");
  rubric.setFrozenRows(1);
  rubric.autoResizeColumns(1, 4);
}
