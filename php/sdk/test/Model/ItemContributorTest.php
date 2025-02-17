<?php
/**
 * ItemContributorTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\catalogItems\v2022_04_01\ItemContributor;

/**
 * ItemContributorTest Class Doc Comment
 *
 * @category    Class
 * @description Individual contributor to the creation of an item, such as an author or actor.
 * @package     SpApi
 */
class ItemContributorTest extends TestCase
{

    private ItemContributor $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ItemContributor();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ItemContributor"
     */
    public function testItemContributor()
    {
        $this->assertInstanceOf(ItemContributor::class, $this->model);
    }

    /**
     * Test attribute "role"
     */
    public function testPropertyRole()
    {
        
        $testValue = new \SpApi\Model\catalogItems\v2022_04_01\ItemContributorRole();
        
        $this->model->setRole($testValue);
        $this->assertEquals($testValue, $this->model->getRole());
    }

    /**
     * Test attribute "value"
     */
    public function testPropertyValue()
    {
        $testValue = 'test';
        
        $this->model->setValue($testValue);
        $this->assertEquals($testValue, $this->model->getValue());
    }
}
