import ReactDOM from 'react-dom';
import Reader from 'containers/Reader'
import { EpubViewer } from 'react-epub-viewer';
import { useEffect, useRef } from 'react';
import { ViewerRef } from 'types'
// const EPUB_URL = "/react-epub-viewer/files/test.epub";
const EPUB_URL = "/react-epub-viewer/files/test2.epub";
// const EPUB_URL = "/react-epub-viewer/files/test3.epub";
// const EPUB_URL = "/react-epub-viewer/files/test4.epub";
// const EPUB_URL = "/react-epub-viewer/files/test5.epub";
// const EPUB_URL = "/react-epub-viewer/files/test6.epub";


const App=()=>{
    const viewerRef = useRef(null);
    return (
        <EpubViewer 
        url={EPUB_URL}
		ref={viewerRef}
			epubOptions={{
							allowScriptedContent: true,
						}}
        />
    )
}

ReactDOM.render(<App />,  document.getElementById('root'));