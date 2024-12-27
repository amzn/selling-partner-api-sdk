<?php
/**
 * ItemContributorRoleTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\catalogitems\ItemContributorRole;

/**
 * ItemContributorRoleTest Class Doc Comment
 *
 * @category    Class
 * @description Role of an individual contributor in the creation of an item, such as author or actor.
 * @package     OpenAPI\Client
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
