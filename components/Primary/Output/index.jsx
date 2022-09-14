export default function Output({ output }) {
  return output ? <p style={{textAlign:"justify"}} dangerouslySetInnerHTML={{ __html: output }}></p> : <></>;
}
