import Editor from "../models/Editor.js";

// Save CKEditor Content & Quote
export const saveContent = async (req, res) => {
  try {
    const { content, title } = req.body; // Accept title instead of quote

    if (!content || content.trim() === "") {
      return res.status(400).json({ success: false, message: "Content is required." });
    }

    const newContent = new Editor({ content, title }); // Save title instead of quote
    await newContent.save();

    res.json({ success: true, message: "Content and title saved successfully!" });
  } catch (error) {
    console.error("Error saving content:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};



// Get Latest CKEditor Content & Quote
export const getContent = async (req, res) => {
  try {
    const content = await Editor.findOne().sort({ _id: -1 });
    res.json({ 
      success: true, 
      content: content?.content || "", 
      title: content?.title || "" // Change quote to title
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
