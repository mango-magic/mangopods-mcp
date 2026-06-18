function createMangoPodsMcpWaitlistForm() {
  const form = FormApp.create("MangoPods MCP Waitlist");

  form.setDescription(
    "MangoPods is not public yet. Join the private waitlist for early access to the MangoPods MCP creative backend for vibe coders."
  );
  form.setCollectEmail(false);
  form.setAllowResponseEdits(false);
  form.setLimitOneResponsePerUser(false);

  form.addTextItem()
    .setTitle("Full Name")
    .setRequired(true);

  const emailValidation = FormApp.createTextValidation()
    .requireTextIsEmail()
    .setHelpText("Use a valid email address.")
    .build();

  form.addTextItem()
    .setTitle("Email Address")
    .setRequired(true)
    .setValidation(emailValidation);

  const linkedInValidation = FormApp.createTextValidation()
    .requireTextMatchesPattern("^https?://(www\\.)?linkedin\\.com/.+")
    .setHelpText("Use a LinkedIn profile URL.")
    .build();

  form.addTextItem()
    .setTitle("LinkedIn Profile URL")
    .setRequired(true)
    .setValidation(linkedInValidation);

  Logger.log("Published URL: " + form.getPublishedUrl());
  Logger.log("Editor URL: " + form.getEditUrl());
}
