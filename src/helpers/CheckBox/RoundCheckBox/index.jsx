import "./index.css";

export default function RoundCheckBox(){
    return(
        <div class="round">
            <input type="checkbox" checked id="checkbox" />
            <label for="checkbox"></label>
        </div>
    )
}