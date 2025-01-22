<?php
/**
 * LabelFormatOptionRequestTest
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
use OpenAPI\Client\Model\merchantFulfillment\LabelFormatOptionRequest;

/**
 * LabelFormatOptionRequestTest Class Doc Comment
 *
 * @category    Class
 * @description Whether to include a packing slip.
 * @package     OpenAPI\Client
 */
class LabelFormatOptionRequestTest extends TestCase
{

    private LabelFormatOptionRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new LabelFormatOptionRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "LabelFormatOptionRequest"
     */
    public function testLabelFormatOptionRequest()
    {
        $this->assertInstanceOf(LabelFormatOptionRequest::class, $this->model);
    }

    /**
     * Test attribute "include_packing_slip_with_label"
     */
    public function testPropertyIncludePackingSlipWithLabel()
    {
        $testValue = true;
        
        $this->model->setIncludePackingSlipWithLabel($testValue);
        $this->assertEquals($testValue, $this->model->getIncludePackingSlipWithLabel());
    }
}
