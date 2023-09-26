import React from 'react';

import { DownloadOutlined } from '@ant-design/icons';
import Button from '@iso/components/uielements/button';
import { direction } from '@iso/lib/helpers/rtl';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


export default function ButtonExportToPDF({container, fileName}) {

    const margin = {
        margin: direction === 'rtl' ? '0 0 8px 8px' : '0 8px 8px 0',
      };
      const size = 'large';  

    const ExportHandler = () => {
        html2canvas(document.querySelector("#"+container)).then(canvas => {
            //document.body.appendChild(canvas);  // if you want see your screenshot in body.
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save(`${fileName}.pdf`); 
        });
    }

    return (
        <>
            <Button
                type="primary"
                icon={<DownloadOutlined />}
                size={size}
                style={margin}
                onClick={ExportHandler}
            >
                Exportar a PDF
            </Button>
        </>
    );
}
