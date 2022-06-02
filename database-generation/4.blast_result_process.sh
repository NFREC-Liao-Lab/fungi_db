#Part5 process the blastp result
blastp_result () {
    genome_id=$1
    genome=$genome_dir/$genome_id
    protein=$genome/*_GeneCatalog_proteins_*
    genes=$genome/*_GeneCatalog_CDS_*
    result_dir=/home/microbiome/data_storage/SATA1/Database_blast/${genome_id}_result
    FunDB_prot_dir=/home/microbiome/data_storage/SATA1/Database/prot
    FunDB_nucl_dir=/home/microbiome/data_storage/SATA1/Database/nucl
    TMH=$result_dir/${genome_id}.TMHs_clean.fasta
    database_dir=/home/microbiome/data_storage/SATA1/database/transporterDB/blast_db/blast_db
    db="$database_dir/tcdb"
    
    #extract the best matched subject and query
    cat $result_dir/${genome_id}.tcdb.blastp.out |awk '!a[$1]++{print}' > $result_dir/${genome_id}.tcdb.blastp.best_matched.tab
    
    #get best matched subject and query id
    cat   $result_dir/${genome_id}.tcdb.blastp.best_matched.tab |awk '{print $1}' |sort -u > $result_dir/${genome_id}.tcdb.blastp.best_matched_query_id
    
    #extract best matched query sequences
    faSomeRecords $TMH  $result_dir/${genome_id}.tcdb.blastp.best_matched_query_id  $result_dir/${genome_id}.tcdb.blastp.best_matched_prot.fasta
    sed -i 's/*//g' $result_dir/${genome_id}.tcdb.blastp.best_matched_prot.fasta
    
    #extract the CDS sequences
    cat $result_dir/${genome_id}.tcdb.blastp.best_matched_query_id |cut -d"|" -f 3 > $result_dir/${genome_id}.tcdb.blastp.best_matched_nucl_id
    for line in $(cat $result_dir/${genome_id}.tcdb.blastp.best_matched_nucl_id); do
        cat $result_dir/${genome_id}.CDS.fasta |grep -w $line|sed 's/>//g' >> $result_dir/${genome_id}.tcdb.blastp.best_matched_nucl_query_id
    done
    
    faSomeRecords $result_dir/${genome_id}.CDS.fasta   $result_dir/${genome_id}.tcdb.blastp.best_matched_nucl_query_id  $result_dir/${genome_id}.tcdb.blastp.best_matched_nucl_query.fasta
    sed -i 's/*//g'  $result_dir/${genome_id}.tcdb.blastp.best_matched_nucl_query.fasta 
    rm -f $result_dir/${genome_id}.tcdb.blastp.best_matched_nucl_id  $result_dir/${genome_id}.tcdb.blastp.best_matched_nucl_query_id
    
    perl -p -e 's/>jgi\|(\S+)\|(\d+)\|/>$1|$1_$2|$3/' $result_dir/${genome_id}.tcdb.blastp.best_matched_nucl_query.fasta | sed 's/*//g'  >  $result_dir/${genome_id}.tcdb.blastp.best_matched_nucl.fasta
    perl -i -p -e 'unless( /^>/ ) {  s/x// }'  $result_dir/${genome_id}.tcdb.blastp.best_matched_nucl.fasta
    
    rm -f $result_dir/${genome_id}.tcdb.blastp.best_matched_nucl_query.fasta 
   }

export -f blastp_result

Updated_genome_list=/home/microbiome/data_storage/SATA1/FunDB/Updated_genome_list
time parallel -j 10 --eta --load 95% --noswap  blastp_result ::: $(cat $Updated_genome_list)
