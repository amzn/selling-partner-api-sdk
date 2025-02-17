<?php
/**
 * ItemContributorRoleTest
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
use SpApi\Model\catalogItems\v2022_04_01\ItemContributorRole;

/**
 * ItemContributorRoleTest Class Doc Comment
 *
 * @category    Class
 * @description Role of an individual contributor in the creation of an item, such as author or actor.
 * @package     SpApi
 */
class ItemContributorRoleTest extends TestCase
{

    private ItemContributorRole $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ItemContributorRole();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ItemContributorRole"
     */
    public function testItemContributorRole()
    {
        $this->assertInstanceOf(ItemContributorRole::class, $this->model);
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
     * Test attribute "value"
     */
    public function testPropertyValue()
    {
        $testValue = 'test';
        
        $this->model->setValue($testValue);
        $this->assertEquals($testValue, $this->model->getValue());
    }
}
