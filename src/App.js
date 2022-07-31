import './App.css';


function App() {
  function display(num){
    document.getElementById('textarea').value+=num;
 }
 function result(){
  var res=document.getElementById('textarea').value;
  var answer=eval(res);
  document.getElementById('textarea').value=answer;

 }
 function clc(){
  document.getElementById('textarea').value=''
 }
  return (
    <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 text-center">
                    <h1>Calculator</h1>
                    <table className="table">
                        <tr>
                            <td colspan="3"><input type="text" id="textarea" /></td>
                            <td><input type="button" value="CLEAR" onClick = {() => {clc()}}></input></td>
                        </tr>
                        <tr>
                            <td><input type="button" value="1" onClick ={ () => display('1') } /></td>
                            <td><input type="button" value="2" onClick ={ () => display('2') } /></td>
                            <td><input type="button" value="3" onClick ={ () => display('3') }/></td>
                            <td><input type="button" value="+" onClick ={ () => display('+') } /></td>
                        </tr>
                        <tr>
                            <td><input type="button" value="4" onClick ={ () => display('4') } /></td>
                            <td><input type="button" value="5" onClick ={ () => display('5') } /></td>
                            <td><input type="button" value="6" onClick ={ () => display('6') } /></td>
                            <td><input type="button" value="-" onClick ={ () => display('-') } /></td>
                        </tr>
                        <tr>
                            <td><input type="button" value="7" onClick ={ () => display('7') } /></td>
                            <td><input type="button" value="8" onClick ={ () => display('8') } /></td>
                            <td><input type="button" value="9" onClick ={ () => display('9') } /></td>
                            <td><input type="button" value="*" onClick ={ () => display('*') } /></td>
                        </tr>
                        <tr>
                            <td><input type="button" value="." onClick ={ () => display('.') }/></td>
                            <td><input type="button" value="0" onClick ={ () => display('0') } /></td>
                            <td><input type="button" value="=" onClick = {() => {result()}} /></td>
                            <td><input type="button" value="/" onClick ={ () => display('/') } /></td>
                        </tr>
                    </table>
                </div>
                
          </div>
    </div>
  )
}

export default App;
