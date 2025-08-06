import fs from 'fs';
import PDFDocument from 'pdfkit';

export function generatePDF(data, filePath) {
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(filePath));

    doc.fontSize(20).text("Resume", { align: 'center' });
    doc.moveDown();
    Object.entries(data).forEach(([key, value]) => {
        doc.fontSize(12).text(`${key}: ${value}`);
    });

    doc.end();
}
