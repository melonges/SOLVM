import Editor from '@monaco-editor/react';

const CodeEditorWindow = ({ onChange, code }) => {
  const handleEditorChange = (value: any) => {
    onChange(value);
  };

  return (
    <>
      <div className="overlay rounded-md overflow-hidden w-[100%] h-full shadow-4xl">
        <Editor
          height="90vh"
          width={`100%`}
          language={'assembly'}
          value={code}
          theme="vs-dark"
          onChange={handleEditorChange}
        />
      </div>
    </>
  );
};
export default CodeEditorWindow;
