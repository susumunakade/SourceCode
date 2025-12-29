

<?php 
//[question.php]から送られてきた名前の変数、選択した回答、問題の答えの変数を作成
$my_name = $_POST['my_name'];
$answer_1 = $_POST['answer_1'];
$answer_2 = $_POST['answer_2'];
$answer_3 = $_POST['answer_3'];
$success_1 = $_POST['success_1'];
$success_2 = $_POST['success_2'];
$success_3 = $_POST['success_3'];



//選択した回答と正解が一致していれば「正解！」、一致していなければ「残念・・・」と出力される処理を組んだ関数を作成する

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
    <div class="answer_inner">
    <p class="heading"><!--POST通信で送られてきた名前を表示-->
    ”<?php echo $my_name; ?>” さんの結果は・・・？</p>
    <div class="answer_text">
        <!--作成した関数を呼び出して結果を表示-->   
        <p>①の答え： 
            <?php 
            if($answer_1 == $success_1){ ?>
                <span class="success"><?php echo '正解！'; ?></span>
            <?php }else{ ?>
                <span class="miss"><?php echo '残念・・・'; ?></span>
            <?php } ?>
        </p>
        <!--作成した関数を呼び出して結果を表示-->
        <p>②の答え： 
        <?php 
            if($answer_2 == $success_2){ ?>
                <span class="success"><?php echo '正解！'; ?></span>
            <?php }else{ ?>
                <span class="miss"><?php echo '残念・・・'; ?></span>
            <?php } ?>
        </p>
        <!--作成した関数を呼び出して結果を表示-->
    

        <p>③の答え： 
        <?php 
            if($answer_3 == $success_3){ ?>
                <span class="success"><?php echo '正解！'; ?></span>
            <?php }else{ ?>
                <span class="miss"><?php echo '残念・・・'; ?></span>
            <?php } ?>
        </p>
    </div>
    </div>
</body>
</html>

