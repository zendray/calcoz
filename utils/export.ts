import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export async function exportToPDF(elementId: string, filename: string = 'calcoz-report.pdf') {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error('Element not found for PDF export');
    return;
  }

  // Get elements to hide
  const noExportElements = document.querySelectorAll('.no-export');

  try {
    // Show the PDF dashboard (it's hidden by default)
    const originalDisplay = (element as HTMLElement).style.display;
    const originalVisibility = (element as HTMLElement).style.visibility;
    
    (element as HTMLElement).style.display = 'block';
    (element as HTMLElement).style.visibility = 'visible';
    (element as HTMLElement).style.position = 'absolute';
    (element as HTMLElement).style.left = '-9999px';
    (element as HTMLElement).style.top = '0';

    // Hide elements with .no-export class before capturing
    noExportElements.forEach((el) => {
      (el as HTMLElement).style.display = 'none';
    });

    // Wait for rendering to complete
    await new Promise(resolve => setTimeout(resolve, 300));

    // Capture the element as canvas with higher quality
    const canvas = await html2canvas(element, {
      scale: 2.5, // Good quality for dashboard
      backgroundColor: '#ffffff',
      logging: false,
      useCORS: true,
      windowWidth: 1200, // Fixed width for consistent layout
      windowHeight: element.scrollHeight,
      ignoreElements: (el) => {
        return el.classList.contains('no-export');
      },
    });

    const imgData = canvas.toDataURL('image/png', 1.0); // Max quality
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true,
    });

    const imgWidth = 190; // A4 width with margins (210mm - 20mm margins)
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    // Add image to PDF (single page dashboard)
    pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);

    pdf.save(filename);

    // Restore hidden elements after export
    (element as HTMLElement).style.display = originalDisplay;
    (element as HTMLElement).style.visibility = originalVisibility;
    (element as HTMLElement).style.position = '';
    (element as HTMLElement).style.left = '';
    (element as HTMLElement).style.top = '';
    
    noExportElements.forEach((el) => {
      (el as HTMLElement).style.display = '';
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    
    // Restore hidden elements even if export fails
    noExportElements.forEach((el) => {
      (el as HTMLElement).style.display = '';
    });
  }
}
