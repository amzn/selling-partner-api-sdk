<?php
/**
 * RegulatedInformationTest
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
use SpApi\Model\orders\v0\RegulatedInformation;

/**
 * RegulatedInformationTest Class Doc Comment
 *
 * @category    Class
 * @description The regulated information collected during purchase and used to verify the order.
 * @package     SpApi
 */
class RegulatedInformationTest extends TestCase
{

    private RegulatedInformation $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new RegulatedInformation();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "RegulatedInformation"
     */
    public function testRegulatedInformation()
    {
        $this->assertInstanceOf(RegulatedInformation::class, $this->model);
    }

    /**
     * Test attribute "fields"
     */
    public function testPropertyFields()
    {
        $testValue = [];
        
        $this->model->setFields($testValue);
        $this->assertEquals($testValue, $this->model->getFields());
    }
}
