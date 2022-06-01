#Part 3
cat FunDB_genomes_info_FungalTraits_Last_Update.tsv |sed 1d | awk '{print $2}' > Updated_genome_list

#assign the directory of genome files
genome_dir=/home/microbiome/data_storage/SATA2/fungi_genome/fungal_genomes

for genome_id in $(cat Updated_genome_list); do
