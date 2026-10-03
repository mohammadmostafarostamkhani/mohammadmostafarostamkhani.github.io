// Progressive enhancement: the ordinary PDF link remains the fallback.
// Save the response bytes as a file rather than handing the download to a PDF viewer.
const cvDownload = document.querySelector('[data-cv-download]');
if (cvDownload && window.location.protocol !== 'file:') {
  cvDownload.addEventListener('click', async (event) => {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (cvDownload.getAttribute('aria-busy') === 'true') return;
    const label = cvDownload.textContent;
    cvDownload.setAttribute('aria-busy', 'true');
    cvDownload.textContent = 'Preparing CV…';
    try {
      const response = await fetch(cvDownload.href);
      if (!response.ok) throw new Error('CV request failed');
      const bytes = await response.arrayBuffer();
      if (new TextDecoder().decode(bytes.slice(0, 5)) !== '%PDF-') throw new Error('Invalid CV response');
      const file = new Blob([bytes], { type: 'application/octet-stream' });
      const url = URL.createObjectURL(file);
      const saveLink = document.createElement('a');
      saveLink.href = url;
      saveLink.download = cvDownload.download;
      saveLink.hidden = true;
      document.body.appendChild(saveLink);
      saveLink.click();
      saveLink.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 60000);
    } catch {
      window.location.assign(cvDownload.href);
    } finally {
      cvDownload.removeAttribute('aria-busy');
      cvDownload.textContent = label;
    }
  });
}
