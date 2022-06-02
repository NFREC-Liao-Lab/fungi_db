#Part6 collect the database sequence id

#FunDB_prot_dir=/home/microbiome/data_storage/SATA1/Database/prot
#FunDB_nucl_dir=/home/microbiome/data_storage/SATA1/Database/nucl
FunDB_dir=/home/microbiome/data_storage/SATA1/Database

echo "SeqID" > $FunDB_dir/FunDB_prot_seqID.tmp.tsv
for seq in $(ls $FunDB_dir/prot); do
    cat $FunDB_dir/prot/$seq |seqkit seq -n >> $FunDB_dir/FunDB_prot_seqID.tmp.tsv
done
mv -f $FunDB_dir/FunDB_prot_seqID.tmp.tsv $FunDB_dir/FunDB_prot_seqID.tsv

echo "SeqID" > $FunDB_dir/FunDB_nucl_seqID.tmp.tsv
for seq in $(ls $FunDB_dir/nucl); do
    cat $FunDB_dir/nucl/$seq |seqkit seq -n >> $FunDB_dir/FunDB_nucl_seqID.tmp.tsv
done
mv -f $FunDB_dir/FunDB_nucl_seqID.tmp.tsv $FunDB_dir/FunDB_nucl_seqID.tsv
