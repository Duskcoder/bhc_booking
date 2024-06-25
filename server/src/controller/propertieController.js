const propertiesSchmea = require("../model/propertiesModel");
const fs = require("fs");

class Propertier {
  async createPropertier(req, res, next) {
    try {
      const PropertierAlready = await propertiesSchmea.findOne({
        propertie_name: req.body.propertie_name,
      });
      if (PropertierAlready) {
        return res.status(400).json({ message: "Model is already exists" });
      }
      const files = req.files;

      const images = files.map((file) => file.filename);
      const newProduct = {
        ...req.body,
        images: images,
      };
      const product = await propertiesSchmea.create(newProduct);
      return res.status(200).json({ message: product });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  async getProduct(req, res, next) {
    try {
      const productget = await propertiesSchmea.find();
      return res.status(200).json({ message: productget });
    } catch (err) {
      return res.status(500).json({ message: "Went Wrong" });
    }
  }
  async patchProduct(req, res, next) {
    try {
      const { id } = req.params;
      const productpatch = await propertiesSchmea.findByIdAndUpdate(
        id,
        req.body,
        {
          new: true,
        }
      );
      return res.status(200).json({ message: productpatch });
    } catch (err) {
      return res.status(500).json({ message: "Went Wrong" });
    }
  }

  async deleteProduct(req, res, next) {
    try {
      const { id } = req.params;
      const productpatch = await propertiesSchmea.findByIdAndUpdate(
        id,
        { active: false },
        {
          new: true,
        }
      );
      return res.status(200).json({ message: productpatch });
    } catch (err) {
      return res.status(500).json({ message: "Went Wrong" });
    }
  }

  async deleteOnlyImage(req, res, next) {
    try {
      const { id, images } = req.body;
      const Product = await propertiesSchmea.findById(id);
      const findUrl = Product.images.find(
        (data) => data.toString() === images.toString()
      );
      if (findUrl) {
        const index = Product.images.indexOf(findUrl);
        Product.images.splice(index, 1);
        const imagePath = `public/${images}`;
        fs.unlinkSync(imagePath);

        await Product.save();

        return res.status(200).json({ message: "Deleted" });
      } else {
        return res.status(404).json({ message: "Error " });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  async uploadImageUpdate(req, res, next) {
    try {
      const { id } = req.params;
      const imageUrls = req.files;
      const productImageUpdate = await propertiesSchmea.findById(id);
      if (productImageUpdate.images.length > 4) {
        return res
          .status(200)
          .json({ message: "You can't add more than five Images" });
      }

      const newImageFilenames = imageUrls.map((file) => file.filename);
      productImageUpdate.images.push(...newImageFilenames);

      await productImageUpdate.save();

      return res.status(200).json({ message: productImageUpdate });
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }

  async getOneProduct(req, res) {
    try {
      const { id } = req.params;
      const product = await propertiesSchmea.findById(id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      return res.status(200).json({ message: product });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
}

module.exports = Propertier;
