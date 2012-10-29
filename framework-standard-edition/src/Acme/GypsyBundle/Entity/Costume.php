<?php

namespace Acme\GypsyBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Acme\GypsyBundle\Entity\Costume
 *
 * @ORM\Table(name="costume")
 * @ORM\Entity
 */
class Costume
{
    /**
     * @var integer $id
     *
     * @ORM\Column(name="id", type="smallint", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string $slug
     *
     * @ORM\Column(name="slug", type="text", nullable=false)
     */
    private $slug;

    /**
     * @var string $name
     *
     * @ORM\Column(name="name", type="text", nullable=false)
     */
    private $name;

    /**
     * @var string $description
     *
     * @ORM\Column(name="description", type="text", nullable=true)
     */
    private $description;

    /**
     * @var string $size
     *
     * @ORM\Column(name="size", type="string", length=8, nullable=true)
     */
    private $size;

    /**
     * @var string $price
     *
     * @ORM\Column(name="price", type="text", nullable=false)
     */
    private $price;

    /**
     * @var boolean $inArchive
     *
     * @ORM\Column(name="in_archive", type="boolean", nullable=false)
     */
    private $inArchive;

    /**
     * @var string $bigImage
     *
     * @ORM\Column(name="big_image", type="text", nullable=false)
     */
    private $bigImage;

    /**
     * @var string $smallImage
     *
     * @ORM\Column(name="small_image", type="text", nullable=false)
     */
    private $smallImage;

    /**
     * @var Category
     *
     * @ORM\ManyToOne(targetEntity="Category")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="category_id", referencedColumnName="id")
     * })
     */
    private $category;



    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set slug
     *
     * @param string $slug
     * @return Costume
     */
    public function setSlug($slug)
    {
        $this->slug = $slug;
    
        return $this;
    }

    /**
     * Get slug
     *
     * @return string 
     */
    public function getSlug()
    {
        return $this->slug;
    }

    /**
     * Set name
     *
     * @param string $name
     * @return Costume
     */
    public function setName($name)
    {
        $this->name = $name;
    
        return $this;
    }

    /**
     * Get name
     *
     * @return string 
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set description
     *
     * @param string $description
     * @return Costume
     */
    public function setDescription($description)
    {
        $this->description = $description;
    
        return $this;
    }

    /**
     * Get description
     *
     * @return string 
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set size
     *
     * @param string $size
     * @return Costume
     */
    public function setSize($size)
    {
        $this->size = $size;
    
        return $this;
    }

    /**
     * Get size
     *
     * @return string 
     */
    public function getSize()
    {
        return $this->size;
    }

    /**
     * Set price
     *
     * @param string $price
     * @return Costume
     */
    public function setPrice($price)
    {
        $this->price = $price;
    
        return $this;
    }

    /**
     * Get price
     *
     * @return string 
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Set inArchive
     *
     * @param boolean $inArchive
     * @return Costume
     */
    public function setInArchive($inArchive)
    {
        $this->inArchive = $inArchive;
    
        return $this;
    }

    /**
     * Get inArchive
     *
     * @return boolean 
     */
    public function getInArchive()
    {
        return $this->inArchive;
    }

    /**
     * Set bigImage
     *
     * @param string $bigImage
     * @return Costume
     */
    public function setBigImage($bigImage)
    {
        $this->bigImage = $bigImage;
    
        return $this;
    }

    /**
     * Get bigImage
     *
     * @return string 
     */
    public function getBigImage()
    {
        return $this->bigImage;
    }

    /**
     * Set smallImage
     *
     * @param string $smallImage
     * @return Costume
     */
    public function setSmallImage($smallImage)
    {
        $this->smallImage = $smallImage;
    
        return $this;
    }

    /**
     * Get smallImage
     *
     * @return string 
     */
    public function getSmallImage()
    {
        return $this->smallImage;
    }

    /**
     * Set category
     *
     * @param Acme\GypsyBundle\Entity\Category $category
     * @return Costume
     */
    public function setCategory(\Acme\GypsyBundle\Entity\Category $category = null)
    {
        $this->category = $category;
    
        return $this;
    }

    /**
     * Get category
     *
     * @return Acme\GypsyBundle\Entity\Category 
     */
    public function getCategory()
    {
        return $this->category;
    }
}