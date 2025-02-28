<?php
/**
 * ExportInfoTest
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
use SpApi\Model\orders\v0\ExportInfo;

/**
 * ExportInfoTest Class Doc Comment
 *
 * @category    Class
 * @description Contains information that is related to the export of an order item.
 * @package     SpApi
 */
class ExportInfoTest extends TestCase
{

    private ExportInfo $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ExportInfo();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ExportInfo"
     */
    public function testExportInfo()
    {
        $this->assertInstanceOf(ExportInfo::class, $this->model);
    }

    /**
     * Test attribute "export_charge"
     */
    public function testPropertyExportCharge()
    {
        
        $testValue = new \SpApi\Model\orders\v0\Money();
        
        $this->model->setExportCharge($testValue);
        $this->assertEquals($testValue, $this->model->getExportCharge());
    }

    /**
     * Test attribute "export_charge_model"
     */
    public function testPropertyExportChargeModel()
    {
        $testValue = 'test';
        
        $this->model->setExportChargeModel($testValue);
        $this->assertEquals($testValue, $this->model->getExportChargeModel());
    }
}
