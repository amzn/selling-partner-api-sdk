<?php
/**
 * RestrictionListTest
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
use OpenAPI\Client\Model\listings\restrictions\RestrictionList;

/**
 * RestrictionListTest Class Doc Comment
 *
 * @category    Class
 * @description A list of restrictions for the specified Amazon catalog item.
 * @package     OpenAPI\Client
 */
class RestrictionListTest extends TestCase
{

    private RestrictionList $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new RestrictionList();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "RestrictionList"
     */
    public function testRestrictionList()
    {
        $this->assertInstanceOf(RestrictionList::class, $this->model);
    }

    /**
     * Test attribute "restrictions"
     */
    public function testPropertyRestrictions()
    {
        $testValue = [];
        
        $this->model->setRestrictions($testValue);
        $this->assertEquals($testValue, $this->model->getRestrictions());
    }
}
