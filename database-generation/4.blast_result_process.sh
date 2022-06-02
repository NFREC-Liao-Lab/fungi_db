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
    
    
    $result_dir/${genome_id}.tcdb.blastp.out
    
    
    
   }

export -f blastp_run

Updated_genome_list=/home/microbiome/data_storage/SATA1/FunDB/Updated_genome_list
time parallel -j 10 --eta --load 95% --noswap  blastp_run ::: $(cat $Updated_genome_list)
