    <table class="table-bordered table">
        <thead>
            <tr>
                    <th>ID</th>
                    <th>Titles</th>
                    <th>Year</th>
                    <th>Location</th>
                    <th>Genre</th>
                      <th>Price</th>
                     <th>ArtistID</th>
                      <th>Paint</th>
                      <th>Dimension</th>
                      <th>Source</th>
            </tr>
        </thead>
        <tbody>
        <?php
            require_once 'connect.php';

            $results = @mysqli_query($conn,"SELECT * FROM ArtWorks");
           if($results){
            while($row = mysqli_fetch_array($results)) {
            ?>
                <tr>
                    <td><?php echo $row['ID']?></td>
                    <td><?php echo $row['Title']?></td>
                     <td><?php echo $row['Year']?></td>
                      <td><?php echo $row['Location']?></td>
                       <td><?php echo $row['Genres']?></td>
                        <td><?php echo $row['Price']?></td>
                        <td><?php echo $row['ArtistID']?></td>
                       <td><?php echo $row['Paint']?></td>
                        <td><?php echo $row['Dimensions']?></td>
                         <td><img src="<?php echo $row['source']?>"></td>

                </tr>

            <?php
            }}
            ?>
            </tbody>
            </table>