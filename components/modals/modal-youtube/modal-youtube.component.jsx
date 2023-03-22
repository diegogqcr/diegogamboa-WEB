import React from "react";

export function ModalYoutube() {
  if (!isVisible) return null

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose();
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm z-200" onClick={handleClose} id="wrapper">
      <div className="relative w-[512px] min-w-[334px]  md:h-auto p-2">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow">
          {/* <!-- Modal header --> */}
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600" onClick={() => onClose()}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-black">
              Visit my youtube channel
            </h3>
            <button type="button" className="inline-flex items-center p-1 ml-auto text-sm text-gray-900 bg-transparent border border-black hover:bg-gray-200 hover:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
              <svg aria-hidden="true" className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <Icon2 /> */}
          {/* <!-- Modal body --> */}
          <div className="p-6 space-y-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
