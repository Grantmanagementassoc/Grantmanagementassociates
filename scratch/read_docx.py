import zipfile
import xml.etree.ElementTree as ET
import sys

def read_docx(file_path):
    try:
        with zipfile.ZipFile(file_path) as docx:
            tree = ET.XML(docx.read('word/document.xml'))
            namespaces = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
            text = []
            for paragraph in tree.iterfind('.//w:p', namespaces):
                para_text = "".join([node.text for node in paragraph.iterfind('.//w:t', namespaces) if node.text])
                if para_text.strip():
                    text.append(para_text)
            return '\n'.join(text)
    except Exception as e:
        return str(e)

if __name__ == "__main__":
    if len(sys.argv) > 2:
        content = read_docx(sys.argv[1])
        with open(sys.argv[2], "w", encoding="utf-8") as f:
            f.write(content)
