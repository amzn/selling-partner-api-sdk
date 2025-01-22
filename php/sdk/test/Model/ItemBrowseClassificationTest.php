<?php
/**
 * ItemBrowseClassificationTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\catalogItems\ItemBrowseClassification;

/**
 * ItemBrowseClassificationTest Class Doc Comment
 *
 * @category    Class
 * @description Classification (browse node) associated with an Amazon catalog item.
 * @package     OpenAPI\Client
 */
class ItemBrowseClassificationTest extends TestCase
{

    private ItemBrowseClassification $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ItemBrowseClassification();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ItemBrowseClassification"
     */
    public function testItemBrowseClassification()
    {
        $this->assertInstanceOf(ItemBrowseClassification::class, $this->model);
    }

    /**
     * Test attribute "display_name"
     */
    public function testPropertyDisplayName()
    {
        $testValue = 'test';
        
        $this->model->setDisplayName($testValue);
        $this->assertEquals($testValue, $this->model->getDisplayName());
    }

    /**
     * Test attribute "classification_id"
     */
    public function testPropertyClassificationId()
    {
        $testValue = 'test';
        
        $this->model->setClassificationId($testValue);
        $this->assertEquals($testValue, $this->model->getClassificationId());
    }

    /**
     * Test attribute "parent"
     */
    public function testPropertyParent()
    {
        
        $testValue = new \OpenAPI\Client\Model\catalogItems\ItemBrowseClassification();
        
        $this->model->setParent($testValue);
        $this->assertEquals($testValue, $this->model->getParent());
    }
}
