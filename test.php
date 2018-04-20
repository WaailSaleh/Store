    <table class="table-bordered table">
        <thead>
            <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Life</th>
                    <th>Lived</th>
                    <th>Genre</th>
                     <th>Fame</th>
                      <th>ArtistSource</th>


            </tr>
        </thead>
        <tbody>
        <?php
            require_once 'connect.php';

            $results = @mysqli_query($conn,"SELECT * FROM Artists");
           if($results){
            while($row = mysqli_fetch_array($results)) {
            ?>
                <tr>
                    <td><?php echo $row['ID']?></td>
                    <td><?php echo $row['Name']?></td>
                     <td><?php echo $row['Life']?></td>
                      <td><?php echo $row['Lived']?></td>
                       <td><?php echo $row['Genre']?></td>
                        <td><?php echo $row['Fame']?></td>
                         <td><img src="<?php echo $row['ArtistSource']?>"></td>

                </tr>

            <?php
            }}
            ?>
            </tbody>
            </table>