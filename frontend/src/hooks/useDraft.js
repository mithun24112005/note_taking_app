import { useEffect, useState } from "react";

/**
 * Custom hook for managing note drafts in LocalStorage
 * Works like WhatsApp - automatically saves as you type and restores on return
 * 
 * @param {string} draftKey - Unique key to identify the draft (e.g., 'new-note' or 'note-123')
 * @param {Object} initialValues - Initial values for title and content
 * @returns {Object} - { title, content, setTitle, setContent, clearDraft, hasDraft }
 **/
const useDraft = (draftKey, initialValues = { title: "", content: "" }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  const [hasDraft, setHasDraft] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load draft from LocalStorage when component mounts
  useEffect(() => {
    const savedDraft = localStorage.getItem(draftKey);
    
    if (savedDraft) {
      try {
        const parsed = JSON.parse(savedDraft);
        setTitle(parsed.title || "");
        setContent(parsed.content || "");
        setHasDraft(true);
      } catch (error) {
        console.error("Error loading draft:", error);
      }
    }
    setIsInitialized(true);
  }, [draftKey]);

  // Auto-save draft whenever title or content changes (after initialization)
  useEffect(() => {
    if (!isInitialized) return; // Don't save during initial load
    
    // Only save if there's actual content
    if (title.trim() || content.trim()) {
      const draft = { title, content, timestamp: Date.now() };
      localStorage.setItem(draftKey, JSON.stringify(draft));
      setHasDraft(true);
    }
  }, [title, content, draftKey, isInitialized]);

  // Clear draft from LocalStorage
  const clearDraft = () => {
    localStorage.removeItem(draftKey);
    setHasDraft(false);
  };

  return {
    title,
    content,
    setTitle,
    setContent,
    clearDraft,
    hasDraft,
  };
};

export default useDraft;
