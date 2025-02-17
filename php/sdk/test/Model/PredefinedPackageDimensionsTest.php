<?php
/**
 * PredefinedPackageDimensionsTest
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
use SpApi\Model\merchantFulfillment\v0\PredefinedPackageDimensions;

/**
 * PredefinedPackageDimensionsTest Class Doc Comment
 *
 * @category    Class
 * @description An enumeration of predefined parcel tokens. If you specify a &#x60;PredefinedPackageDimensions&#x60; token, you are not obligated to use a branded package from a carrier. For example, if you specify the &#x60;FedEx_Box_10kg&#x60; token, you do not have to use that particular package from FedEx. You are only obligated to use a box that matches the dimensions specified by the token. Note: Carriers can have restrictions on the type of package allowed for certain ship methods. Check the carrier website for details. Example: Flat rate pricing is available when materials are sent by USPS in a USPS-produced Flat Rate envelope or box.
 * @package     SpApi
 */
class PredefinedPackageDimensionsTest extends TestCase
{

    private PredefinedPackageDimensions $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PredefinedPackageDimensions();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PredefinedPackageDimensions"
     */
    public function testPredefinedPackageDimensions()
    {
        $this->assertInstanceOf(PredefinedPackageDimensions::class, $this->model);
    }
}
