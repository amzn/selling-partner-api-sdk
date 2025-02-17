<?php
/**
 * RestrictionListTest
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
use SpApi\Model\listings\restrictions\v2021_08_01\RestrictionList;

/**
 * RestrictionListTest Class Doc Comment
 *
 * @category    Class
 * @description A list of restrictions for the specified Amazon catalog item.
 * @package     SpApi
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
