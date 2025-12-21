import { useRef } from "react";

const PdfEmbed = ({ src, title }) => {
  const containerRef = useRef(null);

  const openFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;
    if (el.requestFullscreen) return el.requestFullscreen();
    // vendor prefixes
    if (el.webkitRequestFullscreen) return el.webkitRequestFullscreen();
    if (el.msRequestFullscreen) return el.msRequestFullscreen();
  };

  return (
    <div className="pdf-card-outer">
      <div className="pdf-toolbar">
        <button type="button" className="btn small" onClick={openFullscreen}>Full screen</button>
        <a className="btn small ghost" href={src} target="_blank" rel="noopener noreferrer">Open in new tab</a>
        <a className="btn small" href={src} download>Download</a>
      </div>

      <div ref={containerRef} className="pdf-embed">
        <iframe src={src} title={title} frameBorder="0" />
      </div>
    </div>
  );
};

export default PdfEmbed;
