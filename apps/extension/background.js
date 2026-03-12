chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "create-flashcard",
    title: "Create glossa flashcard from selection",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "create-flashcard" && info.selectionText && tab?.id) {
    const text = encodeURIComponent(info.selectionText.trim());
    const uri = `obsidian://glossa-flashcards?text=${text}`;
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (uri) => { window.location.href = uri; },
      args: [uri],
    });
  }
});
