Vagrant.configure("2") do |config|
  config.vm.box = ENV.fetch("BOX", "alvistack/ubuntu-24.04")

  config.vm.hostname = "garderie-vm"

  config.vm.network "private_network", ip: "192.168.56.10"

  config.vm.provider :libvirt do |lv|
    lv.memory = 2048
    lv.cpus   = 2
  end
  config.vm.synced_folder ".", "/vagrant", type: "rsync",
    rsync__exclude: [".git/", ".vagrant/", "node_modules/"]

  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "ansible/site.yml"
    ansible.become = true
  end
end
