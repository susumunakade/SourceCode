<link rel="stylesheet" href="style.css">

<?php

//POST送信で送られてきた名前を受け取って変数を作成
    $my_name = $_POST['my_name'];

//①画像を参考に問題文の選択肢の配列を作成してください。
$question_1 = ['80' , '22' , '20' ,'21'];
$question_2 = ['PHP' , 'Python' , 'JAVA' ,'HTML'];
$question_3 = ['join' , 'select' , 'insert' ,'update'];


//② ①で作成した、配列から正解の選択肢の変数を作成してください
$success_1 = $question_1[0];
$success_2 = $question_2[3];
$success_3 = $question_3[1];

?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>phpサイトサンプル</title>

     <!-- Google Font -->
     <link rel="preconnect" href="https://fonts.googleapis.com">
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
     <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans+JP:wght@100..900&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!--フォームの作成 通信はPOST通信で-->
    <form action = "answer.php" method = "post">
        <p class="heading">お疲れ様です。”<?php echo $my_name; ?><!--POST通信で送られてきた名前を出力-->” さん</p>
        <div class="question__contents">

            <p class="question_text">①ネットワークのポート番号は何番？</p>
            <!--③ 問題のradioボタンを「foreach」を使って作成する-->
            <div class="question__contents_wrapper">
            <?php 
                foreach($question_1 as $value){ ?>
                <input type="radio" 
                value="<?php echo $value; ?>" 
                name="answer_1" class="question_item">
                <?php echo $value; ?>
            <?php } ?>
            </div>

        <p class="question_text">②Webページを作成するための言語は？</p>
        <!--③ 問題のradioボタンを「foreach」を使って作成する-->
        <div class="question__contents_wrapper">
            <?php 
                foreach($question_2 as $value){ ?>
                    <input type="radio"  
                    value="<?php  echo $value; ?>" 
                    name="answer_2" class="question_item">
                    <?php echo $value; ?>
            <?php } ?>
        </div>

        <p class="question_text">③MySQLで情報を取得するためのコマンドは？</p>
        <!--③ 問題のradioボタンを「foreach」を使って作成する-->
        <div class="question__contents_wrapper">
            <?php 
                foreach($question_3 as $value){ ?>
                    <input type="radio"  
                    value="<?php echo $value; ?>" 
                    name="answer_3" class="question_item">
                    <?php echo $value; ?>
            <?php } ?>
        </div>
    </div>
    

<!--問題の正解の変数と名前の変数を[answer.php]に送る-->
    <br>
    <input type="hidden" name="my_name" value="<?php echo $my_name; ?>">
    <input type="hidden" name="success_1" value="<?php echo $success_1; ?>">
    <input type="hidden" name="success_2" value="<?php echo $success_2; ?>">
    <input type="hidden" name="success_3" value="<?php echo $success_3; ?>">
    <input type="submit" value="回答する" class="submit">
</form>
</body>
</html>




