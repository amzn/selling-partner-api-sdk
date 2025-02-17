<?php
/**
 * RestrictionTest
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
use SpApi\Model\listings\restrictions\v2021_08_01\Restriction;

/**
 * RestrictionTest Class Doc Comment
 *
 * @category    Class
 * @description A listing restriction, optionally qualified by a condition, with a list of reasons for the restriction.
 * @package     SpApi
 */
class RestrictionTest extends TestCase
{

    private Restriction $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Restriction();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Restriction"
     */
    public function testRestriction()
    {
        $this->assertInstanceOf(Restriction::class, $this->model);
    }

    /**
     * Test attribute "marketplace_id"
     */
    public function testPropertyMarketplaceId()
    {
        $testValue = 'test';
        
        $this->model->setMarketplaceId($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceId());
    }

    /**
     * Test attribute "condition_type"
     */
    public function testPropertyConditionType()
    {
        $enumInstance = new Restriction();
        $allowedValues = $enumInstance->getConditionTypeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setConditionType($testValue);
        $this->assertEquals($testValue, $this->model->getConditionType());
    }

    /**
     * Test attribute "reasons"
     */
    public function testPropertyReasons()
    {
        $testValue = [];
        
        $this->model->setReasons($testValue);
        $this->assertEquals($testValue, $this->model->getReasons());
    }
}
