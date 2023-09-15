let primaryNumber = null;
let secondNumber = null;
let currentOperator = null;

let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".op");
let screen = document.querySelector(".screen .display-1");
let resetBtn = document.querySelector(".reset");
let resultBtn = document.querySelector(".result");

screen.textContent = "";

numbers.forEach(currentItem => {
    currentItem.addEventListener("click", (e) => {
        let n = currentItem.querySelector(".display-1").textContent;

        if (n === ".") {
            if (screen.textContent.endsWith('.')) return;
            if (screen.textContent.split(currentOperator).pop().includes('.')) return;
            if (screen.textContent === "" || (currentOperator && screen.textContent.endsWith(currentOperator))) {
                n = "0.";
            }
        }

        screen.textContent += n;
    });
});

function containsOperator() {
    let con = screen.textContent.split(currentOperator);
    return (con[1] !== "" && con.length > 1);
}

operators.forEach(currentItem => {
    let op = currentItem.querySelector(".display-1").textContent;

    currentItem.addEventListener("click", (e) => {
        if (!screen.textContent) {
            console.log("nn pode clicar nesse elemento sem adicionar numeros !!!");
        } else if (containsOperator()) {
            console.log("So pode clicar em um operador por calculo !!!");
        } else if (currentOperator !== null) {
            screen.textContent = screen.textContent.replace(currentOperator, op);
            currentOperator = op;
        } else {
            primaryNumber = screen.textContent;
            currentOperator = op;

            if (screen.textContent.endsWith('.')) {
                screen.textContent += "0";
            }

            screen.textContent += op;
        }
    });
});

resetBtn.addEventListener("click", resetCalculator);

function resetCalculator() {
    screen.textContent = "";
    primaryNumber = null;
    currentOperator = null;
}

resultBtn.addEventListener("click", (e) => {
    if (primaryNumber && currentOperator) {
        let parts = screen.textContent.split(currentOperator);
        secondNumber = parts[1] === "" ? 0 : parts[1];
        let finalResult = operate();
        resetCalculator();
        screen.textContent = finalResult;
    } else {
        console.log("Digite os numeros e o operador de calculo corretamente !!!");
        console.log(secondNumber);
    }
});

function operate() {
    let num1 = parseFloat(primaryNumber);
    let num2 = parseFloat(secondNumber);

    switch (currentOperator) {
        case '+':
            return (num1 + num2).toString();
        case '-':
            return (num1 - num2).toString();
        case '*':
            return (num1 * num2).toString();
        case '/':
            return (num1 / num2).toString();
    }
};

console.log("Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos adipisci nulla minus odit fugiat harum eligendi neque delectus exercitationem, totam fuga ratione dolorum quis nisi unde beatae? Quae aspernatur iure doloribus recusandae illum, consequatur consequuntur nemo nobis porro debitis aliquid ipsum voluptas nulla officiis dolorum numquam blanditiis quis mollitia. Fuga libero dignissimos et eum perferendis non totam, blanditiis voluptatibus dolor facere hic nesciunt delectus maxime ratione dolorem ullam. Assumenda nisi architecto consequatur nostrum esse quidem temporibus beatae possimus labore exercitationem vitae deserunt recusandae est atque sed nulla at dolore sequi dolor aspernatur nobis consectetur, obcaecati praesentium! Accusamus distinctio ipsam dolores error autem quae alias, quibusdam modi? Ad, quas doloribus, enim distinctio praesentium recusandae architecto suscipit quibusdam maiores beatae adipisci quod sequi ea facere consequatur mollitia inventore soluta accusamus nobis aliquam voluptates ut numquam quia. Sapiente amet alias quibusdam, doloribus perspiciatis, expedita aliquam animi, magni eum commodi voluptatem libero dolor! Itaque consequatur sed commodi nam corporis rerum eius iste esse odio accusantium quibusdam, cumque reiciendis alias aspernatur maxime fuga unde ab modi non similique molestiae, doloremque, dignissimos quos adipisci. In, quasi reprehenderit? Debitis necessitatibus nobis pariatur dolorum amet! Harum fugiat excepturi est labore eius. Vero, atque voluptatum inventore ipsa labore voluptas expedita consequuntur est hic aspernatur sunt non illum nostrum odit tempore cupiditate eos quis, ab minus porro maiores id optio rem ea. Porro vel animi voluptate quod, autem facilis quia provident velit aspernatur suscipit tenetur. Ab odio quos atque ipsum molestiae ex architecto expedita, similique minima sunt molestias? Exercitationem eius quod hic quae beatae sapiente qui. Saepe beatae non, tempora recusandae ut molestiae ab minima odit expedita a quaerat neque corrupti blanditiis reprehenderit maiores omnis mollitia consequatur pariatur iusto eveniet, cupiditate aliquid ex earum. Ducimus iure porro in qui mollitia minus nam iusto! Sapiente aut magni impedit assumenda animi iusto, ea repellendus labore quidem harum minus quisquam. Sint eum alias suscipit fugit voluptate doloremque quae nihil consequatur, voluptas commodi quia voluptates eaque neque facere porro recusandae nesciunt illo quos molestias velit totam corporis repudiandae corrupti? Beatae, quis tenetur facere, nam deleniti deserunt ipsum delectus expedita sequi dignissimos modi. Distinctio in suscipit hic maxime dolorum atque officiis, incidunt similique rem adipisci doloremque architecto doloribus reiciendis maiores, veritatis quis enim exercitationem harum ea voluptates. Exercitationem omnis sunt impedit laborum voluptas explicabo totam? Sapiente dolorum animi numquam magni voluptatum eligendi eaque quaerat laudantium quasi ex tenetur ea, pariatur distinctio aspernatur ipsam eius fugit aut neque voluptas cumque. Perspiciatis vel maiores eum eius inventore itaque quae ex, vitae voluptatibus iure dolorum placeat molestiae quod? Blanditiis non, doloremque veniam minima earum vel asperiores nobis cumque pariatur voluptas quibusdam error odit aliquid sed alias tempore consequuntur laboriosam consectetur vero unde mollitia quo delectus quidem optio? Esse tempora nam recusandae, impedit dolores atque cumque explicabo quam ex illum quas consectetur quis accusantium nobis? Nihil similique quia, eum ex sed ducimus? Voluptatum maxime eius reiciendis architecto enim! Minima sequi repellendus tenetur odio quas magni sit quia reiciendis illum tempora iure a doloremque corporis, molestiae, sapiente, rerum corrupti. Voluptatum incidunt alias, deserunt nulla temporibus ratione quasi! Iste eligendi doloribus culpa id, porro minus architecto adipisci perferendis debitis maxime corrupti possimus. Odio dignissimos repellat fuga quaerat impedit officia incidunt, nam debitis totam adipisci, voluptatum provident nulla soluta harum voluptate autem dolorum neque ducimus maiores? Laborum eius hic itaque ipsam. Non consectetur tempore in quam explicabo sit nobis soluta voluptatem, odit quidem eveniet repellat veniam alias iste, aliquid repudiandae ut beatae asperiores! Nobis magnam vel distinctio quia, exercitationem officia tempora a quis nam perspiciatis modi dolore harum, quisquam enim quibusdam quae nulla nihil ea perferendis quam consequuntur nostrum! Vel iusto sapiente unde voluptatem hic expedita asperiores, enim nulla reprehenderit ab provident, recusandae, eius sequi veniam quo modi nisi deleniti repudiandae totam dignissimos dolor voluptatibus! Molestias, laboriosam sit repudiandae sequi excepturi voluptate iusto eaque magnam doloribus, dolorum libero omnis quia perferendis ab? Molestias, sint dicta? Provident mollitia illo aspernatur repellendus! Tenetur labore sed maiores iste non quis saepe sit harum veniam, pariatur libero fuga cumque? Dolor consectetur maiores sunt rem animi officiis voluptatum earum expedita obcaecati. Amet voluptatem repellendus porro expedita fugit iste odit sint nihil quam labore aliquid voluptatum assumenda est vitae, asperiores eos ducimus error nulla. Nesciunt eos assumenda ut? Nostrum perferendis, beatae ipsam hic quas maxime autem unde ea, quam adipisci reprehenderit incidunt accusantium voluptatum magnam modi ex veritatis dolores culpa repudiandae nemo nam eum omnis et minima? Inventore consectetur exercitationem ab maxime ea. Tempore aliquam dolore unde id quis velit exercitationem illo, doloribus dolorem nam labore! Perspiciatis distinctio, possimus aperiam sit quia ipsa. Tempore facere quisquam, quo adipisci quod veniam itaque est eius non quos at, earum consequuntur ipsum alias corrupti facilis ipsam sequi quas accusantium quasi esse, ea corporis. Doloribus exercitationem maxime harum ex dolorum provident nesciunt, illum facilis itaque illo! Similique omnis ex magni doloribus libero quisquam, obcaecati rerum, aperiam nostrum earum provident? Doloremque, nihil? Numquam ea provident dignissimos repudiandae a neque quas officiis expedita, laborum nulla architecto atque corrupti qui eius distinctio temporibus adipisci quos optio! Quidem, nihil molestias? Veritatis aspernatur error fugit. Doloremque dolor asperiores explicabo tempore! Nulla, quasi, iusto inventore cupiditate accusamus possimus tempore facilis asperiores magnam voluptas quam laboriosam sit omnis voluptates recusandae molestiae officia natus fugiat? Adipisci est tenetur, ab iure incidunt inventore sunt tempora voluptatibus nesciunt nulla mollitia quidem, accusantium accusamus ea iusto aspernatur soluta provident, explicabo quasi omnis. Mollitia consequatur dolor pariatur, dolore delectus quasi dolorem perspiciatis, dolores non, voluptates fugiat modi! Sunt voluptatibus ullam aut numquam temporibus, impedit distinctio nam, animi perspiciatis adipisci, nulla quas rem maxime possimus porro omnis ex error quaerat rerum. Esse, facere pariatur assumenda quod ut quo aspernatur perspiciatis molestiae, maiores temporibus quasi voluptate laboriosam. Magnam est deserunt ex adipisci ratione optio vitae consectetur molestias dignissimos voluptas itaque provident accusantium totam perferendis rerum id, vero aspernatur deleniti quibusdam blanditiis cumque excepturi omnis consequuntur. Nemo ad in earum ratione obcaecati natus consectetur ipsam quod itaque quaerat totam asperiores fugit commodi aliquid nihil sunt adipisci, excepturi voluptates sapiente accusantium voluptate ipsa non sequi vel. Blanditiis.");