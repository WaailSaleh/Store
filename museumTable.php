    <table class="table-bordered table">
        <thead>
            <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Year</th>
                    <th>Location</th>
                     <th>Architects</th>
                      <th>History</th>
                      <th>Work</th>
                      <th>Source</th>
            </tr>
        </thead>
        <tbody>
        <?php
            require_once 'connect.php';

            $results = @mysqli_query($conn,"SELECT * FROM Museums");
           if($results){
            while($row = mysqli_fetch_array($results)) {
            ?>
                <tr>
                    <td><?php echo $row['ID']?></td>
                    <td><?php echo $row['Name']?></td>
                     <td><?php echo $row['Year']?></td>
                      <td><?php echo $row['Location']?></td>
                        <td><?php echo $row['Architects']?></td>
                       <td><?php echo $row['History']?></td>
                        <td><?php echo $row['Work']?></td>
                         <td><img src="<?php echo $row['source']?>"></td>

                </tr>

            <?php
            }}
            ?>
            </tbody>
            </table>